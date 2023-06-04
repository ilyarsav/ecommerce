import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { updateCategories } from "../modules/edit-category/services/edit.category.service";
import { appendToCategories } from "../modules/add-category/services/add.category.service";
import { getCategories } from "../services/get.category.service";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const category = ref({});

  const categoryName = ref("");
  const description = ref("");
  const imageUrl = ref("");

  const route = useRoute();
  const { id } = route.params;
  const router = useRouter();
  const categoryLoading = ref(false);

  const filterCategories = computed(() => {
    return categories.value.filter((category, idx) => idx < 6);
  });

  const findCategory = () => {
    category.value = categories.value.find((category) => category.id == id);
  };

  const fetchCategories = async () => {
    categoryLoading.value = true;
    const responce = await getCategories();

    if (responce?.status == 200) {
      categories.value = responce.data;
    } else {
      console.log("error in category store");
    }
    categoryLoading.value = false;
  };

  const editCategories = async (e) => {
    e.preventDefault();

    delete category.value.products;
    await updateCategories(category.value, id);
    router.push({ name: "Category" });
  };

  const addCategories = async (e) => {
    e.preventDefault();

    await appendToCategories({
      categoryName: categoryName.value,
      description: description.value,
      imageUrl: imageUrl.value,
    });
    router.push({ name: "Category" });
  };

  return {
    categories,
    category,
    categoryName,
    description,
    imageUrl,
    categoryLoading,
    findCategory,
    fetchCategories,
    editCategories,
    addCategories,
    filterCategories,
  };
});

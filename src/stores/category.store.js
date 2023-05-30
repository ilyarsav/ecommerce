import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  appendToCategories,
  getCategories,
} from "../services/category.services";
import { updateCategories } from "../modules/edit-category/services/edit.category.service";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const category = ref({});

  const route = useRoute();
  const { id } = route.params;
  const router = useRouter();

  const filterCategories = computed(() => {
    return categories.value.filter((category, idx) => idx < 6);
  });

  const findCategory = () => {
    category.value = categories.value.find((category) => category.id == id);
  };

  const fetchCategories = async () => {
    const responce = await getCategories();

    if (responce?.status == 200) {
      categories.value = responce.data;
    } else {
      console.log("error in category store");
    }
  };

  const editCategories = async (e) => {
    e.preventDefault();

    delete category.value.products;
    await updateCategories(category.value, id);
    router.push({ name: "Category" });
  };

  const addCategories = async (newCategory) => {
    await appendToCategories(newCategory);
  };

  return {
    categories,
    category,
    findCategory,
    fetchCategories,
    editCategories,
    addCategories,
    filterCategories,
  };
});

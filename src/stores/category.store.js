import { defineStore } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
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

  // фильтрация катергорий для модуля home
  const filterCategories = computed(() => {
    return categories.value.filter((category, idx) => idx < 6);
  });

  // для поиска определлной категории по id
  const findCategory = (newId) => {
    newId !== undefined
      ? (category.value = categories.value.find(
          (category) => category.id == newId
        ))
      : (category.value = categories.value.find(
          (category) => category.id == id
        ));
  };

  // получение категорий
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

  // изменение категории
  const editCategories = async (e) => {
    e.preventDefault();
    
    delete category.value.products;
    await updateCategories(category.value, id);
    router.push({ name: "Category" });
  };

  // добавление категории
  const addCategories = async (e) => {
    e.preventDefault();

    await appendToCategories({
      categoryName: categoryName.value,
      description: description.value,
      imageUrl: imageUrl.value,
    });
    router.push({ name: "Category" });
  };

  onMounted(async () => {
    if (categories.value.length === 0) {
      await fetchCategories();
    }

    watch(
      () => route.params.id,
      (newId) => {
        findCategory(newId);
        console.log("fetching categories");
      },
      { immediate: true }
    );
  });

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

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  appendToCategories,
  getCategories,
  updateCategories,
} from "../services/category.services";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);

  const filterCategories = computed(() => {
    return categories.value.filter((category, idx) => idx < 6);
  });

  const fetchCategories = async () => {
    const responce = await getCategories();

    if (responce?.status == 200) {
      categories.value = responce.data;
    } else {
      console.log("error in category store");
    }
  };

  const editCategories = async (category, id) => {
    await updateCategories(category, id);
  };

  const addCategories = async (newCategory) => {
    await appendToCategories(newCategory);
  };

  return {
    categories,
    fetchCategories,
    editCategories,
    addCategories,
    filterCategories,
  };
});

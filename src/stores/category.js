import { defineStore } from "pinia";
import { computed, ref } from "vue";

const baseURL = "https://limitless-lake-55070.herokuapp.com";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);

  const filterCategories = computed(() => {
    return categories.value.filter((category, idx) => idx < 6);
  });
<<<<<<< HEAD

=======
  
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
  const fetchCategories = async () => {
    await fetch(`${baseURL}/category/`)
      .then((response) => response.json())
      .then((res) => (categories.value = res))
      .catch((err) => console.log(err));
  };

<<<<<<< HEAD
  const editCategories = async (category, id) => {
    await fetch(`${baseURL}/category/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).catch((err) => console.log(err));
  };

  const addCategories = async (newCategory) => {
    await fetch(`${baseURL}/category/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    }).catch((err) => console.log(err));
  };

  return {
    categories,
    fetchCategories,
    editCategories,
    addCategories,
    filterCategories,
  };
=======
  return { categories, fetchCategories, filterCategories};
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
});

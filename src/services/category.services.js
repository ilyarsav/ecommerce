import { globalApi } from "../api";

export const getCategories = async () => {
  try {
    return await globalApi.get(`/category/`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const updateCategories = async (category, id) => {
  try {
    await globalApi.post(`/category/update/${id}`, category);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const appendToCategories = async (newCategory) => {
  try {
    await globalApi.post(`/category/create`, newCategory);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

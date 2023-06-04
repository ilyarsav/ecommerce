import { globalApi } from "../../../api";

export const appendToCategories = async (newCategory) => {
  try {
    await globalApi.post(`/category/create`, newCategory);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

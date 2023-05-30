import { globalApi } from "../../../api";

export const updateCategories = async (category, id) => {
  try {
    await globalApi.post(`/category/update/${id}`, category);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

import { globalApi } from "../../../api";

export const getCategories = async () => {
  try {
    return await globalApi.get(`/category/`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

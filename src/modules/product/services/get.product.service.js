import { globalApi } from "../../../api";

export const getProducts = async () => {
  try {
    return await globalApi.get(`/product/`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

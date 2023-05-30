import { globalApi } from "../../../api";

export const appendToProducts = async (newProduct) => {
  try {
    await globalApi.post(`/product/add`, newProduct);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

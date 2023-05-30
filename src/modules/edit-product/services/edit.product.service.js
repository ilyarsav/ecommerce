import { globalApi } from "../../../api";

export const updateProducts = async (id, product) => {
  try {
    await globalApi.post(`/product/update/${id}`, product);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

import { globalApi } from "../api";

export const getProducts = async () => {
  try {
    return await globalApi.get(`/product/`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const updateProducts = async (id, product) => {
  try {
    await globalApi.post(`/product/update/${id}`, product);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const appendToProducts = async (newProduct) => {
  try {
    await globalApi.post(`/product/add`, newProduct);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

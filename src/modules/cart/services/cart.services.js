import { globalApi } from "../../../api";

export const fetchCartData = async (token) => {
  try {
    return await globalApi.get(`/cart/?token=${token}`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const deleteCartItem = async (itemId, token) => {
  try {
    await globalApi.delete(`/cart/delete/${itemId}?token=${token}`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const addCartItem = async (addObject, token) => {
  try {
    const res = await globalApi.post(`/cart/add?token=${token}`, addObject);
    return res;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

import axios from "axios";
import { baseURL } from "./url";

export const fetchCartData = async (token) => {
  try {
    const { data } = await axios.get(`${baseURL}/cart/?token=${token}`);

    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const deleteCartItem = async (itemId, token) => {
  try {
    await axios.delete(`${baseURL}/cart/delete/${itemId}?token=${token}`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const addCartItem = async (addObject, token) => {
  try {
    const res = await axios.post(
      `${baseURL}/cart/add?token=${token}`,
      addObject,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

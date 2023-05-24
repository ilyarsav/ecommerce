import axios from "axios";
import { globalApi } from "../../../api";

export const getWishList = async (token) => {
  try {
    return await globalApi.get(`/wishlist/${token}`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const appendToWishlist = async (token, id) => {
  try {
    const res = await globalApi.post(`/wishlist/add?token=${token}`, { id });
    return res;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

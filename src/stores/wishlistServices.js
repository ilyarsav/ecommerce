import axios from "axios";
import { baseURL } from "./url";

export const getWishList = async (token) => {
    try {
      const { data } = await axios.get(`${baseURL}/wishlist/${token}`);
      return data;
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };
  
  export const appendToWishlist = async (token, id) => {
    try {
      const res = await axios.post(
        `${baseURL}/wishlist/add?token=${token}`,
        { id },
        { headers: { "Content-Type": "application/json" } }
      );
  
      return res;
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };
  
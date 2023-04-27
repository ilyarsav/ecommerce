import axios from "axios";
import { baseURL } from "./url";

export const getProducts = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/product/`);
      return data;
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };
  
  export const updateProducts = async (id, product) => {
    try {
      await axios.post(`${baseURL}/product/update/${id}`, product, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };
  
  export const appendToProducts = async (newProduct) => {
    try {
      await axios.post(`${baseURL}/product/add`, newProduct, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };
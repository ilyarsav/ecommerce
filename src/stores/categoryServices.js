import axios from "axios";
import { baseURL } from "./url";

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/category/`);

    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const updateCategories = async (category, id) => {
  try {
    await axios.post(`${baseURL}/category/update/${id}`, category, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const appendToCategories = async (newCategory) => {
  try {
    await axios.post(`${baseURL}/category/create`, newCategory, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

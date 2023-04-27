import axios from "axios";
import { baseURL } from "./url";

export const addUser = async (user) => {
  try {
    await axios.post(`${baseURL}/user/signup`, user, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

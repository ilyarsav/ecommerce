import axios from "axios";
import { baseURL } from "./url";

export const findUser = async (user) => {
  try {
    const { data } = await axios({
      url: `${baseURL}/user/signIn`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: user,
    });
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

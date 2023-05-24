import { globalApi } from "../../../api";

export const addUser = async (user) => {
  try {
    await globalApi.post(`/user/signup`, user);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

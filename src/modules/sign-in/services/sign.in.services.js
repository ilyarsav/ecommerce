import { globalApi } from "../../../api";

export const findUser = async (user) => {
  try {
    const { data } = await globalApi.post("/user/signIn", user);
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

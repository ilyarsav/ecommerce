import { defineStore } from "pinia";
import { ref } from "vue";
import { baseURL } from "./url";

export const useVerificationStore = defineStore("verification", () => {
  const token = ref("");

  const signUpFetch = async (user) => {
    await fetch(`${baseURL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((err) => console.log(err));
  };

  return {
    token,
    signUpFetch,
  };
});

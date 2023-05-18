import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { findUser } from "../services/sign.in.services";

export const useSignInStore = defineStore("signIn", () => {
  const router = useRouter();
  const email = ref(null);
  const password = ref(null);
  const isAlert = ref(false);

  const signIn = async (e) => {
    e.preventDefault();

    const res = await findUser({
      email: email.value,
      password: password.value,
    });

    if (res?.status === "success") {
      localStorage.setItem("token", res.token);
      router.push({ name: "Home" });
    } else {
      isAlert.value = true;
    }
  };

  return {
    signIn,
    email,
    password,
    isAlert,
  };
});

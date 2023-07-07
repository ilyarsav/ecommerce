import { defineStore } from "pinia";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { addUser } from "../services/sign.up.services";

export const useSignUpStore = defineStore("signUp", () => {
  const email = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const toast = useToast();

  const signUp = async (e) => {
    e.preventDefault();

    if (password.value === confirmPassword.value) {
      await addUser({
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
      });

      toast.add({
        severity: "success",
        detail: "You successfully signed up, please sign in",
        life: 2000,
      });
    } else {
      toast.add({
        severity: "error",
        detail: "Password dont match, please try again",
        life: 2000,
      });
    }
  };

  return {
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    toast,
    signUp,
  };
});

<script setup>
import Toast from "primevue/toast";
import { useSignUpStore } from "./store/sign.up.store";
import SignUpEmail from "./components/sign-up-email.vue";
import SignUpFirstName from "./components/sign-up-first-name.vue";
import SignUpLastName from "./components/sign-up-last-name.vue";
import SignUpPassword from "./components/sign-up-password.vue";
import SignUpConfirmPassword from "./components/sign-up-confirm-password.vue";
import SignUpButton from "./components/sign-up-button.vue";

const signUpStore = useSignUpStore();
const { signUp } = signUpStore;
</script>

<template>
  <div class="container">
    <Toast position="bottom-right" />
    <div class="form-wrap">
      <h2>Create Account</h2>
      <form @submit="signUp">
        <sign-up-email :signUpStore="signUpStore" />
        <sign-up-first-name :signUpStore="signUpStore" />
        <sign-up-last-name :signUpStore="signUpStore" />
        <sign-up-password :signUpStore="signUpStore" />
        <sign-up-confirm-password :signUpStore="signUpStore" />
        <sign-up-button />
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}
.container h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input {
  width: 15rem;
  height: 2rem;
}
</style>

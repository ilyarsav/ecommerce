<script setup>
import { useSignInStore } from "./store/sign.in.store";
import SignInEmail from "./components/sign-in-email.vue";
import SignInPassword from "./components/sign-in-password.vue";
import SignInAlert from "./components/sign-in-alert.vue";
import SignInButton from "./components/sign-in-button.vue";

const signInStore = useSignInStore();
const { signIn } = signInStore;
</script>

<template>
  <div class="container">
    <h2>Sign-In</h2>
    <form @submit="signIn">
      <sign-in-email :signInStore="signInStore" />
      <sign-in-password :signInStore="signInStore" />
      <sign-in-alert :signInStore="signInStore" />
      <sign-in-button />
    </form>
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
.input-container input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
.button {
  border: none;
  padding: 15px 180px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
}

.alert {
  color: red;
}
</style>

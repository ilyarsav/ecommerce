<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { findUser } from "../../stores/signinServices";

const router = useRouter();
const token = ref("");

const email = ref(null);
const password = ref(null);

const isAlert = ref(false);
const alertText = "Неправльно указан логин и/или пароль";

const setGetToken = (res) => {
  localStorage.setItem("token", res.token);
  token.value = localStorage.getItem("token");
};

const signIn = async (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value,
  };

  const res = await findUser(user);
  if (res?.status === "success") {
    setGetToken(res);
    router.push({ name: "Home" });
  } else {
    isAlert.value = true;
  }
};
</script>

<template>
  <div class="container">
    <div class="form-wrap">
      <h2>Sign-In</h2>
      <form @submit="signIn">
        <div class="input-container">
          <label for="email">Email</label>
          <input type="email" name="email" required v-model="email" />
        </div>

        <div class="input-container">
          <label for="password">Password</label>
          <input type="password" name="password" required v-model="password" />
        </div>

        <div class="input-container">
          <span v-if="isAlert" class="alert">{{ alertText }}</span>
        </div>

        <button class="button" type="submit">Continue</button>
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

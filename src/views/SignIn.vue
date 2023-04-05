<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["baseURL"]);
const router = useRouter();
const token = ref("");

const email = ref(null);
const password = ref(null);

const isAlert = ref(false);
const alertText = "Неправльно указан логин и/или пароль";

const signIn = async (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value,
  };

  await fetch(`${props.baseURL}/user/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        isAlert.value = true;
      }
    })
    .then((res) => {
      localStorage.setItem("token", res.token);
      token.value = localStorage.getItem("token");
      router.push({ name: "Home" });
    })
    .catch((err) => console.log(err));
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
          <span v-if="isAlert === true" class="alert">{{ alertText }}</span>
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

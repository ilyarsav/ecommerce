<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const props = defineProps(["baseURL"]);
const emit = defineEmits(["fetchData"]);
const router = useRouter();
const token = ref("");

const email = ref(null);
const password = ref(null);

const signIn = async (e) => {
  e.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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
    .then((response) => response.json())
    .then((res) => {
<<<<<<< HEAD
      localStorage.setItem("token", res.token);
      // emit("fetchData");
      token.value = localStorage.getItem("token");
      cartStore.fetchCartData(token.value);
      router.push({ name: "Home" });
=======
      router.push({ name: "Home" });
      localStorage.setItem("token", res.token);
      emit("fetchData");
      token.value = localStorage.getItem("token");
      cartStore.fetchCartData(token.value);
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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
</style>

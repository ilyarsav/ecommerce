<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["baseURL"]);
const router = useRouter();

const email = ref("");
const firstName = ref("");
const lastName = ref("");
const password = ref("");
const confirmPassword = ref("");

const signUp = async (e) => {
  e.preventDefault();
  if (password.value === confirmPassword.value) {
    const user = {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };

    await fetch(`${props.baseURL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
        router.replace("/");
      })
      .catch((err) => console.log(err));
  } else {
  }
};
</script>

<template>
  <div class="container">
    <!-- <div class="dark-background" v-if="isModal">
      <div class="modal">
        <p>{{ modalText }}</p>
        <button class="button" @click="closeModal">OK</button>
      </div>
    </div> -->

    <div class="logo-wrap">
      <!-- logo -->
    </div>

    <div class="form-wrap">
      <h2>Create Account</h2>

      <form @submit="signUp">
        <div class="input-container">
          <label for="email">Email</label>
          <input type="email" name="email" required v-model="email" />
        </div>

        <div class="input-container">
          <label for="first-name">First Name</label>
          <input type="text" name="first-name" required v-model="firstName" />
        </div>

        <div class="input-container">
          <label for="last-name">Last Name</label>
          <input type="text" name="last-name" required v-model="lastName" />
        </div>

        <div class="input-container">
          <label for="password">Password</label>
          <input type="password" name="password" required v-model="password" />
        </div>

        <div class="input-container">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            required
            v-model="confirmPassword"
          />
        </div>

        <button class="button" type="submit">Create Account</button>
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

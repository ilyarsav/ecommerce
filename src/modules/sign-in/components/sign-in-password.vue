<script setup>
import { storeToRefs } from "pinia";
import Password from "primevue/password";

const props = defineProps(["signInStore"]);
const { password } = storeToRefs(props.signInStore);
</script>

<template>
  <div class="input-container">
    <label for="password">Password</label>
    <Password
      id="password"
      v-model="password"
      class="input"
      toggleMask
      :feedback="false"
    />
  </div>
</template>

<style>
.input {
  width: 15rem;
  height: 2rem;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
</style>

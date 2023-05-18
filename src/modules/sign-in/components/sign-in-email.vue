<script setup>
import { storeToRefs } from "pinia";
import InputText from "primevue/inputtext";

const props = defineProps(["signInStore"]);
const { email } = storeToRefs(props.signInStore);
</script>

<template>
  <div class="input-container">
    <label for="email">Email</label>
    <InputText
      id="email"
      v-model="email"
      class="p-inputtext-sm input"
      type="email"
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

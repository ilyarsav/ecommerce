<script setup>
import { storeToRefs } from "pinia";
import InputText from "primevue/inputtext";

const props = defineProps(["signUpStore"]);
const { firstName } = storeToRefs(props.signUpStore);
</script>

<template>
  <div class="input-container">
    <label for="firstName">First Name</label>
    <InputText
      id="firstName"
      v-model="firstName"
      class="p-inputtext-sm input"
      type="text"
      required
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

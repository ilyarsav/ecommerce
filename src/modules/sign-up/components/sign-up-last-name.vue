<script setup>
import { storeToRefs } from "pinia";
import InputText from "primevue/inputtext";

const props = defineProps(["signUpStore"]);
const { lastName } = storeToRefs(props.signUpStore);
</script>

<template>
  <div class="input-container">
    <label for="lastName">Last Name</label>
    <InputText
      id="lastName"
      v-model="lastName"
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

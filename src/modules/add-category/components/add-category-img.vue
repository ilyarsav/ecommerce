<script setup>
import { storeToRefs } from "pinia";
import InputText from "primevue/inputtext";

const props = defineProps(["categoryStore"]);
const { imageUrl } = storeToRefs(props.categoryStore);
</script>

<template>
  <div class="input-container">
    <label for="url">ImageURL</label>
    <InputText id="url" v-model="imageUrl" class="input" type="text" required />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>

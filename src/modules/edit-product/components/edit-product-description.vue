<script setup>
import { storeToRefs } from "pinia";
import Textarea from "primevue/textarea";

const props = defineProps(["productStore"]);
const { product } = storeToRefs(props.productStore);
</script>

<template>
  <div class="input-container">
    <label for="name">Description</label>
    <Textarea v-model="product.description" rows="5" cols="30" id="name" />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>

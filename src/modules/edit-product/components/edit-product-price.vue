<script setup>
import { storeToRefs } from "pinia";
import InputNumber from "primevue/inputnumber";

const props = defineProps(["productStore"]);
const { product } = storeToRefs(props.productStore);
</script>

<template>
  <div class="input-container">
    <label for="price">Price</label>
    <InputNumber
      v-model="product.price"
      class="input"
      inputId="currency-us"
      mode="currency"
      currency="USD"
      locale="en-US"
      required
    />
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

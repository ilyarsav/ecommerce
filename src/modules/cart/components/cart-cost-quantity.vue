<script setup>
import { ref } from "vue";

const props = defineProps(["cartItem"]);
const price = ref(props.cartItem.product.price);
const quantity = ref(props.cartItem.quantity);
</script>

<template>
  <div class="cost-quantity">
    <p class="information-item">Quantity: {{ quantity }}</p>
    <p class="information-item">Cost: ${{ price }} per unit</p>
  </div>
  <div class="information-item">
    <span>
      Total: <b>${{ price * quantity }}</b>
    </span>
  </div>
</template>

<style scoped>
.information-item {
  margin: 10px;
}
.cost-quantity {
  display: flex;
  justify-content: space-around;
}
</style>

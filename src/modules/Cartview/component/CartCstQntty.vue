<script setup>
const props = defineProps(["quantity", "price"]);
</script>

<template>
  <div class="cost-quantity">
    <p class="information-item">Quantity: {{ props.quantity }}</p>
    <p class="information-item">Cost: ${{ props.price }} per unit</p>
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

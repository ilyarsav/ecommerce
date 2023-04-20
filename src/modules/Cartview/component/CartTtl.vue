<script setup>
const props = defineProps(["quantity", "price"]);
</script>

<template>
  <p class="information-item">
    Total:
    <span>
      <b>${{ props.price * props.quantity }}</b>
    </span>
  </p>
</template>

<style scoped>
.information-item {
  margin: 10px;
}
</style>

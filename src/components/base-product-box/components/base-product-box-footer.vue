<script setup>
import Button from 'primevue/button';

defineProps(["product", "route"]);
</script>

<template>
  <router-link
    :to="{ name: 'EditProduct', params: { id: product.id } }"
    v-show="route.name === 'Product'"
  >
    <Button label="Edit" class="card-button" />
  </router-link>
</template>

<style scoped>
.card-button {
  border: none;
  background-color: var(--red-600);
}
.card-button:hover {
  background-color: var(--red-700);
}
</style>

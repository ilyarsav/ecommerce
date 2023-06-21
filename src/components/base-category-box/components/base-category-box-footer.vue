<script setup>
import Button from "primevue/button";

defineProps(["category", "route"]);
</script>

<template>
  <router-link
    :to="{ name: 'EditCategory', params: { id: category.id } }"
    v-show="route.name === 'Category'"
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

<script setup>
import Button from "primevue/button";
import { useRoute } from "vue-router";
import Card from "primevue/card";

defineProps(["category"]);

const route = useRoute();
</script>

<template>
  <Card class="card">
    <template #header>
      <img class="card-image" :src="category?.imageUrl" alt="Card image cap" />
    </template>
    <template #title>
      <router-link
        :to="{ name: 'ListProducts', params: { id: category.id } }"
        class="card-title"
      >
        <h3>{{ category.categoryName }}</h3>
      </router-link>
    </template>
    <template #content>
      <p class="card-text">
        {{ category.description }}
      </p>
    </template>
    <template #footer>
      <router-link
        :to="{ name: 'EditCategory', params: { id: category.id } }"
        v-show="route.name === 'Category'"
      >
        <Button label="Edit" class="card-button" />
      </router-link>
    </template>
  </Card>
</template>

<style scoped>
.card {
  width: 400px;
  min-height: 300px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 6px rgb(173, 173, 173);
}
.card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
.card-button {
  border: none;
  background-color: var(--red-600);
}
.card-button:hover {
  background-color: var(--red-700);
}
.card-title {
  margin-top: 10px;
  color: black;
  text-decoration: none;
}
.card-text {
  margin: 15px auto;
}
</style>

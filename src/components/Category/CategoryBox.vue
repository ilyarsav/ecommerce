<script setup>
import { useRoute } from "vue-router";

defineProps(["category"]);

const route = useRoute();
</script>

<template>
  <div class="card">
    <div>
      <img class="card-image" :src="category.imageUrl" alt="Card image cap" />
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'ListProducts', params: { id: category.id } }"
        class="card-title"
      >
        <h3 class="card-title">{{ category.categoryName }}</h3>
      </router-link>
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link
        :to="{ name: 'EditCategory', params: { id: category.id } }"
        v-show="route.name === 'Category'"
      >
        <button class="card-button">Edit</button>
      </router-link>
    </div>
  </div>
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
.card-body {
  padding: 12px;
}
.card-button {
  border: none;
  padding: 15px 10px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
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

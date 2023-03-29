<script setup>
import CategoryBox from "../../components/Category/CategoryBox.vue";
<<<<<<< HEAD
import { useCategoryStore } from "../../stores/category";

const categoryStore = useCategoryStore();
=======

defineProps(["categories"]);
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
</script>

<template>
  <div class="container">
    <h1>Our categories</h1>

    <div class="button-wrap">
      <router-link :to="{ name: 'AddCategory' }">
        <button class="button">Add category</button>
      </router-link>
    </div>

    <div class="category-wrap">
<<<<<<< HEAD
      <div v-for="category of categoryStore.categories" :key="category.id">
=======
      <div v-for="category of categories" :key="category.id">
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
        <CategoryBox :category="category" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.container {
  margin-top: 80px;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}
.button-wrap {
  display: flex;
  justify-content: end;
}
.button {
  border: none;
  padding: 15px 10px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>

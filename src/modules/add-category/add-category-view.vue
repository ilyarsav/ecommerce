<script setup>
import { ref } from "vue";
import { useCategoryStore } from "../../stores/category.store";
import { useRouter } from "vue-router";
import AddCategoryName from "./components/add-category-name.vue";
import AddCategoryImg from "./components/add-category-img.vue";
import AddCategoryDescription from "./components/add-category-description.vue";
import Button from "primevue/button";

const categoryStore = useCategoryStore();
const { addCategories } = categoryStore;
</script>

<template>
  <div class="container">
    <h1>Add category</h1>
    <form @submit="addCategories">
      <add-category-name :categoryStore="categoryStore" />
      <add-category-img :categoryStore="categoryStore" />
      <add-category-description :categoryStore="categoryStore" />
      <Button label="Submit" type="submit" class="button" />
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input-container input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
.button {
  margin: auto;
  border: none;
  background-color: var(--red-600);
}
.button:hover {
  background-color: var(--red-700);
}
</style>

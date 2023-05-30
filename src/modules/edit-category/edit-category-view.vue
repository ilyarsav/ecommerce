<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../../stores/category.store";
import EditCategoryName from "./components/edit-category-name.vue";
import EditCategoryDescription from "./components/edit-category-description.vue";
import EditCategoryImg from "./components/edit-category-img.vue";
import Button from "primevue/button";

const categoryStore = useCategoryStore();
const { findCategory, fetchCategories, editCategories } = categoryStore;

onMounted(async () => {
  await fetchCategories();
  findCategory();
});
</script>

<template>
  <div class="container">
    <h1>Edit category</h1>
    <form @submit="editCategories">
      <edit-category-name :categoryStore="categoryStore" />
      <edit-category-description :categoryStore="categoryStore" />
      <edit-category-img :categoryStore="categoryStore" />
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
  margin-top: 20px;
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

<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "../../stores/category.store";
import EditCategoryName from "./components/edit-category-name.vue";
import EditCategoryDescription from "./components/edit-category-description.vue";
import EditCategoryImg from "./components/edit-category-img.vue";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";

const categoryStore = useCategoryStore();
const { editCategories } = categoryStore;
const { categoryLoading } = storeToRefs(categoryStore);
</script>

<template>
  <div class="spinner-wrap" v-if="categoryLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
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
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

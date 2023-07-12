<script setup>
import CategoryBox from "../../../components/base-category-box/base-category-box.vue";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "../store/category.store";

const categoryStore = useCategoryStore();
const { categoryLoading } = storeToRefs(categoryStore);
</script>

<template>
  <div class="spinner-wrap" v-if="categoryLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <h1>Our categories</h1>
    <div class="button-wrap">
      <router-link :to="{ name: 'AddCategory' }">
        <Button label="Add category" class="button" />
      </router-link>
    </div>
    <div class="category-wrap">
      <category-box
        :category="category"
        v-for="category of categoryStore.categories"
        :key="category.id"
      />
    </div>
  </div>
</template>

<style scoped>
.category-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  grid-column-gap: 2em;
}
.container {
  margin: auto;
  padding: 20px;
  max-width: 1400px;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}
.button-wrap {
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
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

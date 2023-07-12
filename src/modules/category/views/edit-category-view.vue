<script setup>
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import { useCategoryStore } from "../store/category.store";

const categoryStore = useCategoryStore();
const { editCategories } = categoryStore;
const { categoryLoading, category } = storeToRefs(categoryStore);
</script>

<template>
  <div class="spinner-wrap" v-if="categoryLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <h1>Edit category</h1>
    <form @submit="editCategories">
      <div class="input-container">
        <label for="name">Name</label>
        <InputText
          id="name"
          v-model="category.categoryName"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <Textarea v-model="category.description" rows="5" cols="30" id="name" />
      </div>
      <div class="input-container">
        <label for="url">ImageURL</label>
        <InputText
          id="url"
          v-model="category.imageUrl"
          class="input"
          type="text"
          required
        />
      </div>
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
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>

<script setup>
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "../store/category.store";


const categoryStore = useCategoryStore();
const { addCategories } = categoryStore;
const { imageUrl, categoryName, description } = storeToRefs(categoryStore);
</script>

<template>
  <div class="container">
    <h1>Add category</h1>
    <form @submit="addCategories">
      <div class="input-container">
        <label for="name">Name</label>
        <InputText
          id="name"
          v-model="categoryName"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="url">ImageURL</label>
        <InputText
          id="url"
          v-model="imageUrl"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <Textarea v-model="description" rows="5" cols="30" id="name" />
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

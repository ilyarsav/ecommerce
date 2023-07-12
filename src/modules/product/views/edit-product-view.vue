<script setup>
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import { useProductStore } from "../store/product.store";
import { useCategoryStore } from "../../category/store/category.store";


const productStore = useProductStore();
const { editProducts } = productStore;
const { productLoading, product } = storeToRefs(productStore);

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
</script>

<template>
  <div class="spinner-wrap" v-if="productLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <h1>Edit product</h1>
    <form @submit="editProducts">
      <div class="input-container">
        <label for="name">Category</label>
        <Dropdown
          v-model="product.categoryId"
          :options="categories"
          optionLabel="categoryName"
          optionValue="id"
          class="dropdown"
        />
      </div>
      <div class="input-container">
        <label for="name">Name</label>
        <InputText
          id="name"
          v-model="product.name"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <Textarea v-model="product.description" rows="5" cols="30" id="name" />
      </div>
      <div class="input-container">
        <label for="url">ImageURL</label>
        <InputText
          id="url"
          v-model="product.imageURL"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="price">Price</label>
        <InputNumber
          v-model="product.price"
          class="input"
          inputId="currency-us"
          mode="currency"
          currency="USD"
          locale="en-US"
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
  padding: 20px;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 20px;
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
.dropdown {
  width: 300px;
}
.input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>
../../category/store/category.store

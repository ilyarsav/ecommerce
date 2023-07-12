<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "../../../stores/category.store";
import { useProductStore } from "../store/product.store";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { storeToRefs } from "pinia";
import InputNumber from "primevue/inputnumber";

const productStore = useProductStore();
const { categoryId, description, imageURL, name, price } =
  storeToRefs(productStore);
const { addProducts } = productStore;

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);

onMounted(async () => {
  await categoryStore.fetchCategories();
});
</script>

<template>
  <div class="container">
    <h1>Add product</h1>
    <form @submit="addProducts">
      <div class="input-container">
        <label for="name">Category</label>
        <Dropdown
          v-model="categoryId"
          :options="categories"
          optionLabel="categoryName"
          optionValue="id"
          class="dropdown"
          filter
        />
      </div>
      <div class="input-container">
        <label for="name">Name</label>
        <InputText
          id="name"
          v-model="name"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <Textarea v-model="description" rows="5" cols="30" id="name" />
      </div>
      <div class="input-container">
        <label for="url">ImageURL</label>
        <InputText
          id="url"
          v-model="imageURL"
          class="input"
          type="text"
          required
        />
      </div>
      <div class="input-container">
        <label for="price">Price</label>
        <InputNumber
          v-model="price"
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
  margin: 80px 0 20px 0;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
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
/* dropdown */
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.dropdown {
  width: 300px;
}
/* description */
#name {
  max-width: 300px;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
/* name */
.input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>
../../category/store/category.store

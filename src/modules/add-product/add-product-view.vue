<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product.store";
import AddProductDropdown from "./components/add-product-dropdown.vue";
import AddProductName from "./components/add-product-name.vue";
import AddProductDescription from "./components/add-product-description.vue";
import AddProductImg from "./components/add-product-img.vue";
import AddProductPrice from "./components/add-product-price.vue";
import Button from "primevue/button";

const productStore = useProductStore();
const { addProducts } = productStore;
const categoryStore = useCategoryStore();

onMounted(async () => {
  await categoryStore.fetchCategories();
});
</script>

<template>
  <div class="container">
    <h1>Add product</h1>
    <form @submit="addProducts">
      <add-product-dropdown
        :categoryStore="categoryStore"
        :productStore="productStore"
      />
      <add-product-name :productStore="productStore" />
      <add-product-description :productStore="productStore" />
      <add-product-img :productStore="productStore" />
      <add-product-price :productStore="productStore" />
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
</style>

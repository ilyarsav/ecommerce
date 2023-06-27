<script setup>
import Button from "primevue/button";
import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product.store";
import EditProductDropdown from "./components/edit-product-dropdown.vue";
import EditProductImg from "./components/edit-product-img.vue";
import EditProductName from "./components/edit-product-name.vue";
import EditProductPrice from "./components/edit-product-price.vue";
import EditProductDescription from "./components/edit-product-description.vue";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { editProducts } = productStore;
const { productLoading } = storeToRefs(productStore);
const categoryStore = useCategoryStore();
</script>

<template>
  <div class="spinner-wrap" v-if="productLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <h1>Edit product</h1>
    <form @submit="editProducts">
      <edit-product-dropdown
        :productStore="productStore"
        :categoryStore="categoryStore"
      />
      <edit-product-name :productStore="productStore" />
      <edit-product-description :productStore="productStore" />
      <edit-product-img :productStore="productStore" />
      <edit-product-price :productStore="productStore" />
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
</style>

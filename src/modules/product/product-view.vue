<script setup>
import ProductBox from "../../components/base-product-box/base-product-box.vue";
import { useProductStore } from "../../stores/product.store";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { productLoading } = storeToRefs(productStore);
</script>

<template>
  <div class="spinner-wrap" v-if="productLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <h1>Our products</h1>
    <div class="button-wrap">
      <router-link :to="{ name: 'AddProduct' }">
        <Button label="Add product" class="button" />
      </router-link>
    </div>
    <div class="product-wrap">
      <product-box
        :product="product"
        v-for="product of productStore.products"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style scoped>
.product-wrap {
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

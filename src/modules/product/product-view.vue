<script setup>
import { onMounted } from "vue";
import ProductBox from "../../components/ProductBox.vue";
import { useProductStore } from "../../stores/product.store";
import Button from "primevue/button";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <div class="container">
    <h1>Our products</h1>

    <div class="button-wrap">
      <router-link :to="{ name: 'AddProduct' }">
        <Button label="Add product" class="button" />
      </router-link>
    </div>

    <div class="product-wrap">
      <div v-for="product of productStore.products" :key="product.id">
        <product-box :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.container {
  margin-top: 80px;
  padding: 20px;
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
</style>

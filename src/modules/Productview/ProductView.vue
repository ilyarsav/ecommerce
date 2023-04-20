<script setup>
import { onMounted } from "vue";
import ProductBox from "../../components/Product/ProductBox.vue";
import { useProductStore } from "../../stores/product";

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
        <button class="button">Add product</button>
      </router-link>
    </div>

    <div class="product-wrap">
      <div v-for="product of productStore.products" :key="product.id">
        <ProductBox :product="product" />
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
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}
.button-wrap {
  display: flex;
  justify-content: end;
}
.button {
  border: none;
  padding: 15px 10px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>

<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product.store";
import HomeCategories from "./components/home-categories.vue";
import HomeHeader from "./components/home-header.vue";
import HomeProducts from "./components/home-products.vue";

const categoryStore = useCategoryStore();
const productStore = useProductStore();

const fetchData = () => {
  categoryStore.fetchCategories();
  productStore.fetchProducts();
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <home-header />
  <home-categories :filterCategories="categoryStore.filterCategories" />
  <hr />
  <home-products :filterProducts="productStore.filterProducts" />
</template>

<style scoped></style>

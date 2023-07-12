<script setup>
import { useCategoryStore } from "../category/store/category.store";
import { useProductStore } from "../product/store/product.store";
import HomeCategories from "./components/home-categories.vue";
import HomeHeader from "./components/home-header.vue";
import HomeProducts from "./components/home-products.vue";

const categoryStore = useCategoryStore();
const productStore = useProductStore();
</script>

<template>
  <home-header />
  <home-categories :categoryStore="categoryStore" />
  <hr />
  <home-products :productStore="productStore" />
</template>

<style scoped></style>
../product/store/product.store ../category/store/category.store

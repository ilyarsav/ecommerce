<script setup>
import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product.store";
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

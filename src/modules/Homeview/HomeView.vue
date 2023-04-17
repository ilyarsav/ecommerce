<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import HomeCategories from "./components/HomeCategories.vue";
import HomeHeader from "./components/HomeHeader.vue";
import HomeProducts from "./components/HomeProducts.vue";

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
  <HomeHeader />
  <HomeCategories :filterCategories="categoryStore.filterCategories" />
  <hr />
  <HomeProducts :filterProducts="productStore.filterProducts" />
</template>

<style scoped></style>

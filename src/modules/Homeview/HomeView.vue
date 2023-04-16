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
  <div class="home">
    <HomeHeader />

    <div class="container">
      <HomeCategories :filterCategories="categoryStore.filterCategories" />

      <hr />
      <HomeProducts :filterProducts="productStore.filterProducts" />
      
    </div>
  </div>
</template>

<style scoped></style>

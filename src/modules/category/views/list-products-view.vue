<script setup>
import ProductBox from "../../../components/base-product-box/base-product-box.vue";
import { storeToRefs } from "pinia";
import ProgressSpinner from "primevue/progressspinner";
import { useCategoryStore } from "../store/category.store";

const categoryStore = useCategoryStore();
const { category, categoryLoading } = storeToRefs(categoryStore);
</script>

<template>
  <div class="spinner-wrap" v-if="categoryLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <div class="header-text">
      <h4>{{ category?.categoryName }}</h4>
      <h5 v-if="category?.products == 0">No products</h5>
      <h5 v-else-if="category?.products == 1">Only 1 product</h5>
      <h5 v-else>
        {{ category?.products?.length + " products found" }}
      </h5>
    </div>
    <div class="content">
      <product-box
        :product="product"
        v-for="product of category?.products"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
}
.header-text {
  text-align: center;
}
.header-text h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
.header-text h5 {
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 20px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
../category/store/category.store

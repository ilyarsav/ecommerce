<script setup>
import CategoryBox from "../components/Category/CategoryBox.vue";
import ProductBox from "../components/Product/ProductBox.vue";
import { useCategoryStore } from "../stores/category";
import { useProductStore } from "../stores/product";

const categoryStore = useCategoryStore();
const productStore = useProductStore();
</script>

<template>
  <div class="home">
    <div class="background-div">
      <div class="header-container">
        <header class="header">
          <h3>
            <a href="#start-shopping">Start shopping</a>
            <p>Demo Ecommerce</p>
          </h3>
        </header>
      </div>
    </div>

    <div class="container">
      <div class="section-wrap categories">
        <div class="top-header">
          <h2>Top categories</h2>
        </div>
        <div class="top-content">
          <div
            class="box-wrap"
            v-for="filteredCategory in categoryStore.filterCategories"
            :key="filteredCategory.id"
          >
            <CategoryBox :category="filteredCategory" />
          </div>
        </div>
      </div>

      <hr />

      <div class="section-wrap propucts">
        <div class="top-header">
          <h2>Top products</h2>
        </div>
        <div class="top-content">
          <div
            class="box-wrap"
            v-for="filteredProduct in productStore.filterProducts"
            :key="filteredProduct.id"
          >
            <ProductBox :product="filteredProduct" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-div {
  background: url("../assets/shoppingcart-1066110386.webp");
  min-height: 100vh;
  background-size: cover;
}
.header {
  font-family: Arial, Helvetica, sans-serif;
  width: 1000px;
  padding-top: 13%;
  padding-left: 15%;
}
.header a {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 22px;
  color: rgb(192, 4, 4);
}
.header p {
  font-size: 16px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.685);
}
.section-wrap {
  margin-bottom: 20px;
}
.top-header {
  text-align: center;
  margin: 20px auto;
}
.top-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

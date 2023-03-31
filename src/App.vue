<script setup>
import { onMounted, ref } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import { useCategoryStore } from "./stores/category";
import { useProductStore } from "./stores/product";

const baseURL = "https://limitless-lake-55070.herokuapp.com";

const categoryStore = useCategoryStore();
const productStore = useProductStore();
const token = ref("");

const fetchData = () => {
  categoryStore.fetchCategories();
  productStore.fetchProducts();
};

onMounted(() => {
  token.value = localStorage.getItem("token");
  fetchData();
});
</script>

<template>
  <div class="container">
    <div class="nav">
      <Navbar />
    </div>
    <div class="content">
      <router-view
        v-if="categoryStore?.categories && productStore?.products"
        :baseURL="baseURL"
      />
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.content {
  margin-top: 50px;
  min-height: 70vh;
}
</style>

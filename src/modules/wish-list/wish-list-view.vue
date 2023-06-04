<script setup>
import { onMounted } from "vue";
import ProductBox from "../../components/ProductBox.vue";
import { useWishlistStore } from "./store/wish.list.store";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";

const wishlistStore = useWishlistStore();
const { wishlist, wishlistLoading } = storeToRefs(wishlistStore);
const { fetchWishList } = wishlistStore;
const token = localStorage.getItem("token");

onMounted(() => {
  fetchWishList(token);
});
</script>

<template>
  <div class="spinner-wrap" v-if="wishlistLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <div class="header">
      <h4>Your WishList</h4>
    </div>
    <div class="content-wrap">
      <div v-for="product in wishlist" :key="product.id">
        <product-box :product="product" class="box" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
.header {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
}
.content-wrap {
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

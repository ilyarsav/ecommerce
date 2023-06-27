<script setup>
import { onMounted } from "vue";
import ProductBox from "../../components/base-product-box/base-product-box.vue";
import { useWishlistStore } from "./store/wish.list.store";
import ProgressSpinner from "primevue/progressspinner";
import { storeToRefs } from "pinia";

const wishlistStore = useWishlistStore();
const { wishlist, wishlistLoading } = storeToRefs(wishlistStore);
</script>

<template>
  <div class="spinner-wrap" v-if="wishlistLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <div class="header">
      <h1>Your WishList</h1>
    </div>
    <div class="content-wrap">
      <product-box
        :product="product"
        class="box"
        v-for="product in wishlist"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style scoped>
.content-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  grid-column-gap: 2em;
}
.container {
  margin: auto;
  padding: 20px;
  max-width: 1400px;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

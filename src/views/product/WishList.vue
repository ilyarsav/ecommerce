<script setup>
import { ref, onMounted } from "vue";
import ProductBox from "../../components/Product/ProductBox.vue";
import { useWishlistStore } from "../../stores/wishlist";

const wishlistStore = useWishlistStore()
const token = ref("");

onMounted(() => {
  token.value = localStorage.getItem("token");
  wishlistStore.fetchWishList(token.value)
});
</script>

<template>
  <div class="container">
    <div class="header">
      <h4>Your WishList</h4>
    </div>
    <div class="content-wrap">
      <div v-for="product in wishlistStore.wishlist" :key="product.id">
        <ProductBox :product="product" class="box" />
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
</style>

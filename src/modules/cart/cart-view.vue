<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useCartStore } from "./store/cart.store";
import ProgressSpinner from "primevue/progressspinner";
import CartContent from "./components/cart-content.vue";
import CartTotalCost from "./components/cart-total-cost.vue";

const cartStore = useCartStore();
const { cartLoading, token, cartItems, totalCost } = storeToRefs(cartStore);
</script>

<template>
  <div class="container">
    <ProgressSpinner v-if="cartLoading" class="spinner-wrap" />
    <h3 v-else-if="!token">You need to sign In</h3>
    
    <div v-else class="content-wrap">
      <h4 class="header">Shopping Cart</h4>
      <p v-if="cartItems?.length === 0">No products in a cart</p>
      <cart-content
        v-else
        class="content-item"
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cartStore="cartStore"
        :cartItem="cartItem"
      />
      <cart-total-cost v-if="cartItems?.length !== 0" :totalCost="totalCost" />
    </div>
  </div>
</template>

<style scoped>
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin-bottom: 20px;
  font-size: 22px;
}
.content-item {
  display: flex;
  align-items: center;
  padding: 20px;
  width: 700px;
  margin-bottom: 20px;
}
</style>

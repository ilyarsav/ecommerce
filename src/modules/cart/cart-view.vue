<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useCartStore } from "./store/cart.store";
import CartCostQuantity from "./components/cart-cost-quantity.vue";
import CartImg from "./components/cart-img.vue";
import CartName from "./components/cart-name.vue";
import CartRemoveButton from "./components/cart-remove-button.vue";
import CartTotalCost from "./components/cart-total-cost.vue";
import ProgressSpinner from "primevue/progressspinner";

const token = ref(localStorage.getItem("token"));
const { cartItems, totalCost, cartLoading } = storeToRefs(useCartStore());
const { getCartData, removeCartItem } = useCartStore();

onMounted(async () => {
  await getCartData(token);
});
</script>

<template>
  <div class="spinner-wrap" v-if="cartLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <h3 v-if="!token">You need to sign In</h3>

    <div class="content-wrap" v-else>
      <h4 class="header">Shopping Cart</h4>

      <p v-if="cartItems?.length === 0">No products in a cart</p>
      <div class="content">
        <div
          class="content-item"
          v-for="cartItem in cartItems"
          :key="cartItem.id"
        >
          <cart-img :imageURL="cartItem.product.imageURL" />
          <div class="information">
            <cart-name :cartItem="cartItem.product" />
            <cart-cost-quantity :cartItem="cartItem" />
            <cart-remove-button
              :id="cartItem.id"
              :token="token"
              @removeCartItem="removeCartItem"
            />
          </div>
        </div>
        <cart-total-cost
          :totalCost="totalCost"
          v-if="cartItems?.length !== 0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.content {
  max-width: 700px;
}
.content-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgb(143, 143, 143);
}
.information {
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

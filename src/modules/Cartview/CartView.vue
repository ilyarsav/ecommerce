<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useCartStore } from "../../stores/cart";
import CartCostQuantity from "./component/CartCostQuantity.vue";
import CartImg from "./component/CartImg.vue";
import CartName from "./component/CartName.vue";
import CartRemoveButton from "./component/CartRemoveButton.vue";
import CartTotal from "./component/CartTotal.vue";

const token = ref("");
const { cartItems, totalCost } = storeToRefs(useCartStore());
const { fetchCartData } = useCartStore();

onMounted(() => {
  token.value = localStorage.getItem("token");
  fetchCartData(token.value);
});
</script>

<template>
  <div class="container">
    <h3 v-if="!token">You need to sign In</h3>

    <div class="content-wrap" v-else>
      <div class="header">
        <h4>Shopping Cart</h4>
      </div>

      <div class="content">
        <div
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          class="content-item"
        >
          <CartImg :imageURL="cartItem.product.imageURL" />
          <div class="information">
            <CartName :id="cartItem.product.id" :name="cartItem.product.name" />
            <CartCostQuantity
              :quantity="cartItem.quantity"
              :price="cartItem.product.price"
            />
            <CartTotal
              :quantity="cartItem.quantity"
              :price="cartItem.product.price"
            />
            <CartRemoveButton :id="cartItem.id" :token="token" />
          </div>
        </div>
        <div class="total-cost">
          <b>Total: ${{ totalCost }}</b>
        </div>
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
}
.header h4 {
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
.total-cost {
  margin-top: 20px;
  margin-left: 600px;
  font-size: 22px;
}
</style>

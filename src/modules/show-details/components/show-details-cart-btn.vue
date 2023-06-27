<script setup>
import { storeToRefs } from "pinia";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import { useCartStore } from "../../cart/store/cart.store";

const cartStore = useCartStore();
const { cartLoading } = storeToRefs(cartStore);
const { appendToCart } = cartStore;

const props = defineProps(["id"]);
const quantity = ref(1);

const addToCart = async () => {
  await appendToCart({
    productId: props.id,
    quantity: quantity.value,
  });
};
</script>

<template>
  <div class="add-to-cart-wrap">
    <div class="add-to-cart-quantity">
      <span class="quantity-span">Quantity</span>
      <InputText type="number" v-model="quantity" class="quantity" />
    </div>
    <Button
      type="button"
      label="Add to cart"
      :loading="cartLoading"
      class="add-to-cart-btn"
      @click="addToCart()"
    />
  </div>
</template>

<style scoped>
.add-to-cart-wrap {
  display: flex;
  justify-content: space-between;
}
.add-to-cart-quantity {
  display: flex;
  align-items: center;
}
.add-to-cart-quantity input {
  width: 50px;
  height: 100%;
}
.quantity-span {
  background-color: rgb(255, 175, 69);
  padding: 15px 8px;
  border-radius: 5%;
}
.add-to-cart-btn {
  border: none;
  background-color: var(--red-500);
}
.add-to-cart-btn:hover {
  background-color: var(--red-600);
}
</style>

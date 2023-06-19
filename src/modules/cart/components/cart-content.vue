<script setup>
import Card from "primevue/card";
import CartCostQuantity from "./cart-cost-quantity.vue";
import CartImg from "./cart-img.vue";
import CartName from "./cart-name.vue";
import CartRemoveButton from "./cart-remove-button.vue";

const props = defineProps(["cartStore", "cartItem"]);
const { removeCartItem } = props.cartStore;
</script>

<template>
  <Card>
    <template #header>
      <cart-img :imageURL="cartItem.product.imageURL" />
    </template>
    <template #title>
      <cart-name :cartItem="cartItem.product" />
    </template>
    <template #content>
      <cart-cost-quantity :cartItem="cartItem" />
    </template>
    <template #footer>
      <cart-remove-button :id="cartItem.id" @removeCartItem="removeCartItem" />
    </template>
  </Card>
</template>

<style scoped></style>

<script setup>
import { useCartStore } from "../../../stores/cart";

const props = defineProps(["token", 'id']);
const { deleteCartItem } = useCartStore();

const deleteItem = (itemId) => {
  deleteCartItem(itemId, props.token);
};
</script>

<template>
  <a href="#" class="removeBtn" @click="deleteItem(cartItem.id)">
    Remove from cart
  </a>
</template>

<style scoped></style>

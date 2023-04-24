<script setup>
import { useCartStore } from "../../../stores/cart";

const props = defineProps(["id", "token"]);
const { deleteCartItem } = useCartStore();

const deleteItem = (itemId) => {
  deleteCartItem(itemId, props.token);
};
</script>

<template>
  <a href="#" class="remove-button" @click="deleteItem(props.id)">
    Remove from cart
  </a>
</template>

<style scoped>
.remove-button {
  color: rgb(192, 4, 4);
  text-decoration: none;
  font-weight: 700;
}
</style>

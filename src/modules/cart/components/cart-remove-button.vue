<script setup>
import Button from "primevue/button";

const props = defineProps(["id"]);
const emits = defineEmits(["removeCartItem"]);

const deleteItem = (itemId) => {
  emits("removeCartItem", itemId);
};
</script>

<template>
  <Button
    href="#"
    class="remove-button"
    @click="deleteItem(props.id)"
    label="Remove from cart"
  />
</template>

<style scoped>
.remove-button {
  background-color: rgb(192, 4, 4);
  padding: 12px;
  border: none;
}
.remove-button:hover {
  background-color: rgb(139, 0, 0);
}
</style>

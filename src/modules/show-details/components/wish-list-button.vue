<script setup>
import { useWishlistStore } from "../../wish-list/index";
import Button from "primevue/button";

const props = defineProps(["token"]);
const emits = defineEmits(["show"]);

const wishlistStore = useWishlistStore();

const addToWishlist = () => {
  if (!props.token) {
    emits("show", {
      severity: "info",
      summary: "info",
      detail: "please log in to add item to wishlist",
    });
    return;
  }

  wishlistStore.addProductToWishlist(props.token);
};
</script>

<template>
  <Button
    class="wishlist-button"
    @click="addToWishlist()"
    type="button"
    label="Add to wishlist"
    :loading="wishlistStore.wishlistLoading"
  />
</template>

<style scoped>
.wishlist-button {
  padding: 12px 10px;
  cursor: pointer;
}
</style>

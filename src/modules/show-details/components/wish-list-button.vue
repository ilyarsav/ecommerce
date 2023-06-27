<script setup>
import { useWishlistStore } from "../../wish-list/index";
import Button from "primevue/button";

const wishlistStore = useWishlistStore();
</script>

<template>
  <Button
    class="wishlist-button"
    @click="wishlistStore.addProductToWishlist()"
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

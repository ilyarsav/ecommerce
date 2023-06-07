<script setup>
import { ref } from "vue";
import { useWishlistStore } from "../../wish-list/index";
import Button from "primevue/button";

const props = defineProps(["token"]);
const emits = defineEmits(["show"]);

const wishlistStore = useWishlistStore();
const wishlistString = ref("Add to wishlist");

const addToWishlist = () => {
  if (!props.token) {
    emits("show", {
      severity: "info",
      summary: "info",
      detail: "please log in to add item to wishlist",
    });
    return;
  }

  wishlistStore.addProductToWishlist(props.token).then((res) => {
    if (wishlistStore.isAddedToWishlist) {
      wishlistString.value = "Added to wishlist";
    }
  });
};
</script>

<template>
  <Button class="wishlist-button" @click="addToWishlist()">
    {{ wishlistString }}
  </Button>
</template>

<style scoped>
.wishlist-button {
  padding: 12px 10px;
  cursor: pointer;
}
</style>

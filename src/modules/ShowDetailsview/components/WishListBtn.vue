<script setup>
import { ref } from "vue";
import { useWishlistStore } from "../../../stores/wishlist";

const props = defineProps(["token", "id"]);
const emits = defineEmits(["show"]);
const wishlistStore = useWishlistStore();
const wishlistString = ref("Add to wishlist");
const notifyText = {
  severity: "info",
  summary: "info",
  detail: "please log in to add item to wishlist",
};

const addToWishlist = () => {
  if (!props.token) {
    emits("show", notifyText);
    return;
  }

  wishlistStore.addProductToWishlist(props.token, props.id).then((res) => {
    if (wishlistStore.isAddedToWishlist) {
      wishlistString.value = "Added to wishlist";
    }
  });
};
</script>

<template>
  <button class="wishlist-button" @click="addToWishlist()">
    {{ wishlistString }}
  </button>
</template>

<style scoped>
.wishlist-button {
  padding: 12px 10px;
  border-radius: 5px;
  border: none;
  background-color: rgb(173, 173, 173);
  cursor: pointer;
}
</style>

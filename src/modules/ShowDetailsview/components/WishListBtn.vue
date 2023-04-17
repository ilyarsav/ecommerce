<script setup>
import { ref } from "vue";
import { useWishlistStore } from "../../../stores/wishlist";

const props = defineProps(["token", "id"]);
const emits = defineEmits(["switchModal", "changeModalText"]);
const wishlistStore = useWishlistStore();
const wishlistString = ref("Add to wishlist");
const notifyText= "please log in to add item to wishlist";

const addToWishlist = () => {
  if (!props.token) {
    emits("changeModalText", notifyText);
    emits("switchModal", true);
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
  <button class="wishlist-button" @click="addToWishlist()" >
    {{ wishlistString }}
  </button>
</template>

<style scoped></style>

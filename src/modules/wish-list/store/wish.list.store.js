import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { appendToWishlist, getWishList } from "../services/wish.list.services";

export const useWishlistStore = defineStore("wishlist", () => {
  const wishlist = ref([]);
  const isAddedToWishlist = ref(false);
  const wishlistLoading = ref(false);

  const fetchWishList = async (token) => {
    wishlistLoading.value = true;

    const res = await getWishList(token);

    if (res?.status == 200) {
      wishlist.value = res.data;
    } else {
      console.log("error in wishlist store");
    }
    wishlistLoading.value = false;
  };

  const addProductToWishlist = async (token, id) => {
    const res = await appendToWishlist(token, id);
    res.status == 201 && (isAddedToWishlist.value = true);
  };

  return {
    wishlist,
    isAddedToWishlist,
    wishlistLoading,
    fetchWishList,
    addProductToWishlist,
  };
});

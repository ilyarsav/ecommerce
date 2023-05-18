import { defineStore } from "pinia";
import { ref } from "vue";
import { appendToWishlist, getWishList } from "../services/wish.list.services";

export const useWishlistStore = defineStore("wishlist", () => {
  const wishlist = ref([]);
  const isAddedToWishlist = ref(false);

  const fetchWishList = async (token) => {
    const res = await getWishList(token);
    wishlist.value = res;
  };

  const addProductToWishlist = async (token, id) => {
    const res = await appendToWishlist(token, id);
    res.status == 201 && (isAddedToWishlist.value = true);
  };

  return { wishlist, isAddedToWishlist, fetchWishList, addProductToWishlist };
});

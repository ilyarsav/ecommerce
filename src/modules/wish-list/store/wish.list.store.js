import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { appendToWishlist, getWishList } from "../services/wish.list.services";

export const useWishlistStore = defineStore("wishlist", () => {
  const wishlist = ref([]);
  const isAddedToWishlist = ref(false);

  const fetchWishList = async (token) => {
    const res = await getWishList(token);
    wishlist.value = res;
    if (res?.status == 200) {
      wishlist.value = res.data;
    } else {
      console.log("error in wishlist store");
    }
  };

  const addProductToWishlist = async (token, id) => {
    const res = await appendToWishlist(token, id);
    res.status == 201 && (isAddedToWishlist.value = true);
  };

  return { wishlist, isAddedToWishlist, fetchWishList, addProductToWishlist };
});

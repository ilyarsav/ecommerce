import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { baseURL } from "./url";

export const useWishlistStore = defineStore("wishlist", () => {
  const wishlist = ref([]);
  const isAddedToWishlist = ref(false);

  const fetchWishList = async (token) => {
    await fetch(`${baseURL}/wishlist/${token}`)
      .then((res) => res.json())
      .then((res) => (wishlist.value = res))
      .catch((err) => console.log(err));
  };

  const addProductToWishlist = async (token, id) => {
    await fetch(`${baseURL}/wishlist/add?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.status == 201) {
          isAddedToWishlist.value = true;
        }
      })
      .catch((err) => console.log(err));
  };
  return { wishlist, isAddedToWishlist, fetchWishList, addProductToWishlist };
});

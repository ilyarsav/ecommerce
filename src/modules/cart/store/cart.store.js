import { defineStore } from "pinia";
import { ref } from "vue";
import {
  addCartItem,
  deleteCartItem,
  fetchCartData,
} from "../services/cart.services";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const totalCost = ref(0);
  const isAdded = ref(false);

  const getCartData = async (token) => {
    const responce = await fetchCartData(token);

    if (responce?.status == 200) {
      cartItems.value = responce.data.cartItems;
      totalCost.value = responce.data.totalCost;
    } else {
      console.log("error in category store");
    }
  };

  const removeCartItem = async (itemId, token) => {
    await deleteCartItem(itemId, token);
    getCartData(token);
  };

  const appendToCart = async (addObject, token) => {
    const res = await addCartItem(addObject, token);
    if (res.status == 201) {
      isAdded.value = true;
      getCartData(token);
    }
  };

  return {
    cartItems,
    totalCost,
    isAdded,
    getCartData,
    removeCartItem,
    appendToCart,
  };
});

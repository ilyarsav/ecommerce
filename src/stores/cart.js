import { defineStore } from "pinia";
import { ref } from "vue";
import { addCartItem, deleteCartItem, fetchCartData } from "./cartServices";


export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const totalCost = ref(0);
  const isAdded = ref(false);

  const getCartData = async (token) => {
    const responce = await fetchCartData(token);
    cartItems.value = responce.cartItems;
    totalCost.value = responce.totalCost;
  };

  const removeCartItem = async (itemId, token) => {
    await deleteCartItem(itemId, token);
    getCartData(token);
    // не делать запрос, а просто обновить cartItems
  };

  const appendToCart = async (addObject, token) => {
    const res = await addCartItem(addObject, token);
    console.log(res);
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

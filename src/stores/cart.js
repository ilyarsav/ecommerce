import { defineStore } from "pinia";
import { ref } from "vue";

const baseURL = "https://limitless-lake-55070.herokuapp.com";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const totalCost = ref(0);
  const isAdded = ref(false);
  // const token = ref(""); порпобовать засунуть токен в стейт

  const fetchCartData = async (token) => {
    await fetch(`${baseURL}/cart/?token=${token}`)
      .then((response) => response.json())
      .then((res) => {
        cartItems.value = res.cartItems;
        totalCost.value = res.totalCost;
      })
      .catch((err) => console.log(err));
  };

  const deleteCartItem = async (itemId, token) => {
    await fetch(`${baseURL}/cart/delete/${itemId}?token=${token}`, {
      method: "DELETE",
    })
      .then(() => fetchCartData(token))
      .catch((err) => console.log(err));
  };

  const addCartItem = async (addObject, token) => {
    await fetch(`${baseURL}/cart/add?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addObject),
    })
      .then((res) => {
        if (res.status == 201) {
          isAdded.value = true;
          fetchCartData(token);
        }
      })
      .catch((err) => console.log(err));
  };

  return {
    cartItems,
    totalCost,
    isAdded,
    fetchCartData,
    deleteCartItem,
    addCartItem,
  };
});

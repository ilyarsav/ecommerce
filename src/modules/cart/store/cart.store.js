import { defineStore } from "pinia";
import { ref, watch } from "vue";
import {
  addCartItem,
  deleteCartItem,
  fetchCartData,
} from "../services/cart.services";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";

export const useCartStore = defineStore("cart", () => {
  // const routeCart = useRoute();
  // const { id } = routeCart.params;

  const toast = useToast();

  const cartItems = ref([]);
  const totalCost = ref(0);

  const isAdded = ref(false);
  const cartLoading = ref(false);

  const getCartData = async (token) => {
    cartLoading.value = true;

    const responce = await fetchCartData(token);
    if (responce?.status == 200) {
      cartItems.value = responce.data.cartItems;
      totalCost.value = responce.data.totalCost;
    } else {
      console.log("error in cart store");
    }
    cartLoading.value = false;
  };

  const removeCartItem = async (itemId, token) => {
    cartLoading.value = true;
    await deleteCartItem(itemId, token);
    getCartData(token);
    cartLoading.value = false;
  };

  const appendToCart = async (addObject, token) => {
    cartLoading.value = true;

    await getCartData(token);
    if (
      cartItems.value?.find((elem) => elem.product.id == addObject.productId)
        ? false
        : true
    ) {
      const res = await addCartItem(addObject, token);
      if (res.status == 201) {
        getCartData(token);
        toast.add({
          severity: "success",
          detail: "Product added to cart",
          life: 3000,
        });
      }
    } else {
      toast.add({
        severity: "info",
        detail: "You added this product to cart earlier",
        life: 3000,
      });
    }

    cartLoading.value = false;
  };

  return {
    cartItems,
    totalCost,
    isAdded,
    cartLoading,
    getCartData,
    removeCartItem,
    appendToCart,
  };
});

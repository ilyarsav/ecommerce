import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import {
  addCartItem,
  deleteCartItem,
  fetchCartData,
} from "../services/cart.services";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";

export const useCartStore = defineStore("cart", () => {
  const token = ref(localStorage.getItem("token"));
  const toast = useToast();

  const cartItems = ref([]);
  const totalCost = ref(0);
  const cartLoading = ref(false);

  const getCartData = async () => {
    cartLoading.value = true;

    const responce = await fetchCartData(token.value);
    if (responce?.status == 200) {
      cartItems.value = responce.data.cartItems;
      totalCost.value = responce.data.totalCost;
    } else {
      console.log("error in cart store");
    }
    cartLoading.value = false;
  };

  const removeCartItem = async (itemId) => {
    cartLoading.value = true;
    await deleteCartItem(itemId, token.value);
    getCartData(token.value);
    cartLoading.value = false;
  };

  const appendToCart = async (addObject) => {
    if (!token.value) {
      toast.add({
        severity: "info",
        summary: "info",
        detail: "please log in to add item to cart",
        life: 3000,
      });
      return;
    }

    cartLoading.value = true;
    await getCartData(token.value);
    if (
      cartItems.value?.find((elem) => elem.product.id == addObject.productId)
        ? false
        : true
    ) {
      const res = await addCartItem(addObject, token.value);
      if (res.status == 201) {
        getCartData(token.value);
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

  onMounted(async () => {
    if (cartItems.value.length === 0) {
      await getCartData();
      console.log("fetching products in the cart");
    }
  });

  return {
    cartItems,
    totalCost,
    cartLoading,
    token,
    getCartData,
    removeCartItem,
    appendToCart,
  };
});

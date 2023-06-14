import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import { appendToWishlist, getWishList } from "../services/wish.list.services";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";

export const useWishlistStore = defineStore("wishlist", () => {
  const wishlist = ref([]);
  const wishlistLoading = ref(false);

  const route = useRoute();
  const { id } = route.params;
  const toast = useToast();

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

  const addProductToWishlist = async (token) => {
    wishlistLoading.value = true;
    await fetchWishList(token);
    if (wishlist.value?.find((elem) => elem.product.id == id) ? false : true) {
      const res = await appendToWishlist(token, id);
      res.status == 201 &&
        toast.add({
          severity: "success",
          summary: "success",
          detail: "Product added to wishlist",
          life: 3000,
        });
    } else {
      toast.add({
        severity: "info",
        summary: "info",
        detail: "You added this product to wishlist earlier",
        life: 3000,
      });
    }
    wishlistLoading.value = false;
  };

  onMounted(async () => {
    // watch(
    //   () => route.params.id,
    //   (newId) => {
    //     findProduct(newId);
    //   },
    //   { immediate: true }
    // );
  });

  return {
    wishlist,
    wishlistLoading,
    fetchWishList,
    addProductToWishlist,
  };
});

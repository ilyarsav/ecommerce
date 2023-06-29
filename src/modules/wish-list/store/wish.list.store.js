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
  const token = ref(localStorage.getItem("token"));

  // получить список желаний
  const fetchWishList = async () => {
    wishlistLoading.value = true;

    const res = await getWishList(token.value);

    if (res?.status == 200) {
      wishlist.value = res.data;
    } else {
      console.log("error in wishlist store");
    }
    wishlistLoading.value = false;
  };

  // добавить в список желаний
  const addProductToWishlist = async () => {
    if (!token.value) {
      emits("show", {
        severity: "info",
        summary: "info",
        detail: "please log in to add item to wishlist",
      });
      return;
    }

    wishlistLoading.value = true;
    await fetchWishList(token.value);
    if (wishlist.value?.find((elem) => elem.product.id == id) ? false : true) {
      const res = await appendToWishlist(token.value, id);
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
    if (wishlist.value.length === 0) {
      await fetchWishList();
      console.log("fetching wishlist");
    }
  });

  return {
    wishlist,
    wishlistLoading,
    fetchWishList,
    addProductToWishlist,
  };
});

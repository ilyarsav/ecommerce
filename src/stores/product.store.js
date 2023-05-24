import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  appendToProducts,
  getProducts,
  updateProducts,
} from "../services/product.services";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const filterProducts = computed(() => {
    return products.value.filter((product, idx) => idx < 6);
  });

  const fetchProducts = async () => {
    const res = await getProducts();

    if (res?.status == 200) {
      products.value = res.data;
    } else {
      console.log("error in product store");
    }
  };

  const editProducts = async (id, product) => {
    await updateProducts((id, product));
  };

  const addProducts = async (newProduct) => {
    await appendToProducts(newProduct);
  };

  return {
    products,
    fetchProducts,
    editProducts,
    addProducts,
    filterProducts,
  };
});

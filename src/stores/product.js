import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  appendToProducts,
  getProducts,
  updateProducts,
} from "./productServices";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const id = ref(null);

  const filterProducts = computed(() => {
    return products.value.filter((product, idx) => idx < 6);
  });

  const addId = (newID) => {
    id.value = +newID;
  };

  const fetchProducts = async () => {
    const res = await getProducts();
    products.value = res;
  };

  const editProducts = async (id, product) => {
    await updateProducts((id, product));
  };

  const addProducts = async (newProduct) => {
    await appendToProducts(newProduct);
  };

  return {
    products,
    id,
    addId,
    fetchProducts,
    editProducts,
    addProducts,
    filterProducts,
  };
});

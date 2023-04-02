import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { baseURL } from "./url";


export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const filterProducts = computed(() => {
    return products.value.filter((product, idx) => idx < 6);
  });

  const fetchProducts = async () => {
    await fetch(`${baseURL}/product/`)
      .then((response) => response.json())
      .then((res) => (products.value = res))
      .catch((err) => console.log(err));
  };

  const editProducts = async (id, product) => {
    await fetch(`${baseURL}/product/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(() => fetchProducts())
      .catch((err) => console.log(err));
  };

  const addProducts = async (newProduct) => {
    await fetch(`${baseURL}/product/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).catch((err) => console.log(err));
  };

  return {
    products,
    fetchProducts,
    editProducts,
    addProducts,
    filterProducts,
  };
});

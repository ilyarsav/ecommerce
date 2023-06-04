import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { updateProducts } from "../modules/edit-product/services/edit.product.service";
import { getProducts } from "../services/get.product.service";
import { appendToProducts } from "../modules/add-product/services/add.product.service";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const product = ref({});

  const categoryId = ref(null);
  const name = ref(null);
  const description = ref(null);
  const imageURl = ref(null);
  const price = ref(null);

  const router = useRouter();
  const route = useRoute();
  const { id } = route.params;
  const productLoading = ref(false);

  const filterProducts = computed(() => {
    return products.value.filter((product, idx) => idx < 6);
  });

  const findProduct = () => {
    product.value = products.value.find((product) => product.id == id);
  };

  const fetchProducts = async () => {
    productLoading.value = true;
    const res = await getProducts();

    if (res?.status == 200) {
      products.value = res.data;
    } else {
      console.log("error in product store");
    }
    productLoading.value = false;
  };

  const editProducts = async (e) => {
    e.preventDefault();

    await updateProducts(id, product.value);
    router.push({ name: "Product" });
  };

  const addProducts = async (e) => {
    e.preventDefault();

    await appendToProducts({
      categoryId: categoryId.value,
      name: name.value,
      description: description.value,
      imageURl: imageURl.value,
      price: price.value,
    });
    router.push({ name: "Product" });
  };

  return {
    products,
    product,
    categoryId,
    name,
    description,
    imageURl,
    price,
    productLoading,
    findProduct,
    fetchProducts,
    editProducts,
    addProducts,
    filterProducts,
  };
});

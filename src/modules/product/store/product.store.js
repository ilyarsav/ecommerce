import { defineStore } from "pinia";
import { computed, ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { updateProducts } from "../services/edit.product.service";
import { getProducts } from "../services/get.product.service";
import { appendToProducts } from "../services/add.product.service";

export const useProductStore = defineStore("product", () => {
  const router = useRouter();
  const route = useRoute();
  const { id } = route.params;

  const products = ref([]);
  const product = ref({});

  const categoryId = ref(null);
  const name = ref(null);
  const description = ref(null);
  const imageURl = ref(null);
  const price = ref(null);

  const productLoading = ref(false);

  // фильтр для модуля home
  const filterProducts = computed(() => {
    return products.value.filter((product, idx) => idx < 6);
  });

  // для поиска определлного продукта по id
  const findProduct = (newId) => {
    if (newId) {
      product.value = products.value.find((product) => product.id == newId);
    } else {
      product.value = products.value.find((product) => product.id == id);
    }
  };

  // получение продуктов
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

  // изменение продукта
  const editProducts = async (e) => {
    e.preventDefault();

    await updateProducts(id, product.value);
    router.push({ name: "Product" });
  };

  // добавить продукт
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

  onMounted(async () => {
    if (products.value.length == 0) {
      await fetchProducts();
      console.log("fetching products");
    }

    watch(
      () => route.params.id,
      (newId) => {
        findProduct(newId);
      },
      { immediate: true }
    );
  });

  return {
    products,
    product,
    categoryId,
    name,
    description,
    imageURl,
    price,
    productLoading,
    fetchProducts,
    editProducts,
    addProducts,
    filterProducts,
  };
});

<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product.store";
import ShowDetailsCartBtn from "./components/show-details-cart-btn.vue";
import ShowDetailsFeatures from "./components/show-details-features.vue";
import ShowDetailsImg from "./components/show-details-img.vue";
import ShowDetailsInformation from "./components/show-details-information.vue";
import WishListBtn from "./components/wish-list-button.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import ProgressSpinner from "primevue/progressspinner";

const productStore = useProductStore();
const { product, productLoading } = storeToRefs(productStore);
const { fetchProducts, findProduct } = productStore;

const categoryStore = useCategoryStore();
const { category, categoryLoading } = storeToRefs(categoryStore);
const { fetchCategories, findCategory } = categoryStore;

const route = useRoute();
const { id } = route.params;
const token = localStorage.getItem("token");
const toast = useToast();

const show = (data) => {
  toast.add(data);
};

onMounted(async () => {
  await fetchProducts();
  await fetchCategories();
  findProduct();
  findCategory();
});
</script>

<template>
  <Toast position="bottom-right" />
  <div class="spinner-wrap" v-if="categoryLoading && productLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <show-details-img :src="product?.imageURL" />
    <div class="show-information-wrap">
      <show-details-information
        :name="product?.name"
        :categoryName="category?.categoryName"
        :price="product?.price"
        :description="product?.description"
      />
      <show-details-cart-btn :token="token" @show="show" :id="id" />
      <show-details-features />
      <wish-list-btn :token="token" :id="id" @show="show" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 50px 100px;
  display: flex;
  justify-content: center;
}
.show-information-wrap {
  margin-left: 40px;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import ShowDetailsCartBtn from "./components/ShowDetailsCartBtn.vue";
import ShowDetailsFeatures from "./components/ShowDetailsFeatures.vue";
import ShowDetailsImg from "./components/ShowDetailsImg.vue";
import ShowDetailsInformation from "./components/ShowDetailsInformation.vue";
import WishListBtn from "./components/WishListBtn.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

// при обновлении данные пропадают
const { products } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();
const { categories } = storeToRefs(useCategoryStore());
const { fetchCategories } = useCategoryStore();
const route = useRoute();
const { id } = route.params;
const product = ref({});
const category = ref({});
const token = localStorage.getItem("token");
const toast = useToast();

const show = (data) => {
  toast.add(data);
};

onMounted(async () => {
  await fetchProducts();
  await fetchCategories();
  product.value = products.value.find((product) => product.id == id);
  category.value = categories.value.find(
    (category) => category.id == product.value.categoryId
  );
});
</script>

<template>
  <div class="container">
    <Toast position="bottom-right" />
    <show-details-img :src="product.imageURL" />
    <div class="show-information-wrap">
      <show-details-information
        :name="product.name"
        :categoryName="category.categoryName"
        :price="product.price"
        :description="product.description"
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
</style>

<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import ShowDetailsCartBtn from "./components/ShowDetailsCartBtn.vue";
import ShowDetailsFtrs from "./components/ShowDetailsFtrs.vue";
import ShowDetailsImg from "./components/ShowDetailsImg.vue";
import ShowDetailsInfrm from "./components/ShowDetailsInfrm.vue";
import WishListBtn from "./components/WishListBtn.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

// при обновлении данные пропадают
const { products } = storeToRefs(useProductStore());
const { categories } = storeToRefs(useCategoryStore());
const route = useRoute();
const { id } = route.params;
const product = ref({});
const category = ref({});
const token = ref("");
const toast = useToast();

const show = (data) => {
  toast.add(data);
};

onMounted(() => {
  token.value = localStorage.getItem("token");
  product.value = products.value.find((product) => product.id == id);
  category.value = categories.value.find(
    (category) => category.id == product.value.categoryId
  );
});
</script>

<template>
  <div class="container">
    <Toast position="bottom-right" />
    <ShowDetailsImg :src="product.imageURL" />
    <div class="show-information-wrap">
      <ShowDetailsInfrm
        :name="product.name"
        :categoryName="product.categoryName"
        :price="product.price"
        :description="product.description"
      />
      <ShowDetailsCartBtn :token="token" @show="show" :id="id" />
      <ShowDetailsFtrs />
      <WishListBtn :token="token" :id="id" @show="show" />
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

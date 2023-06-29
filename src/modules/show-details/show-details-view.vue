<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/product.store";
import ShowDetailsCartBtn from "./components/show-details-cart-btn.vue";
import ShowDetailsFeatures from "./components/show-details-features.vue";
import ShowDetailsImg from "./components/show-details-img.vue";
import ShowDetailsInformation from "./components/show-details-information.vue";
import WishListBtn from "./components/wish-list-button.vue";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";

const productStore = useProductStore();
const { product, productLoading } = storeToRefs(productStore);
</script>

<template>
  <Toast position="bottom-right" />
  <ProgressSpinner class="spinner-wrap" v-if="productLoading" />
  <div class="container" v-else>
    <show-details-img :src="product?.imageURL" />
    <div class="show-information-wrap">
      <show-details-information
        :name="product?.name"
        :price="product?.price"
        :description="product?.description"
      />
      <show-details-cart-btn />
      <show-details-features />
      <wish-list-btn />
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

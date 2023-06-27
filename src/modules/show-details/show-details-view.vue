<script setup>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
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

const route = useRoute();
const { id } = route.params;
const token = localStorage.getItem("token");
</script>

<template>
  <Toast position="bottom-right" />
  <div class="spinner-wrap" v-if="productLoading">
    <ProgressSpinner />
  </div>
  <div class="container" v-else>
    <show-details-img :src="product?.imageURL" />
    <div class="show-information-wrap">
      <show-details-information
        :name="product?.name"
        :price="product?.price"
        :description="product?.description"
      />
      <show-details-cart-btn @show="show" :id="id" />
      <show-details-features />
      <wish-list-btn :token="token" @show="show" />
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

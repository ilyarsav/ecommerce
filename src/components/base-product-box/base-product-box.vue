<script setup>
import Card from "primevue/card";
import BaseProductBoxTitle from "./components/base-product-box-title.vue";
import BaseProductBoxContent from "./components/base-product-box-content.vue";
import BaseProductBoxFooter from "./components/base-product-box-footer.vue";
import { useRoute } from "vue-router";

defineProps(["product"]);
const route = useRoute();
</script>

<template>
  <Card class="card">
    <template #header>
      <img class="card-image" :src="product?.imageURL" alt="Card image cap" />
    </template>
    <template #title>
      <base-product-box-title :product="product" />
    </template>
    <template #content>
      <base-product-box-content :product="product" :route="route" />
    </template>
    <template #footer>
      <base-product-box-footer :product="product" :route="route" />
    </template>
  </Card>
</template>

<style scoped>
.card {
  width: 400px;
  min-height: 380px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 6px rgb(173, 173, 173);
}
.card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>

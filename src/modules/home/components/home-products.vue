<script setup>
import ProgressSpinner from "primevue/progressspinner";
import ProductBox from "../../../components/base-product-box/base-product-box.vue";
import { storeToRefs } from "pinia";

const props = defineProps(["productStore"]);
const { filterProducts, productLoading } = storeToRefs(props.productStore);
</script>

<template>
  <div class="spinner-wrap" v-if="productLoading">
    <ProgressSpinner />
  </div>
  <div class="section-wrap propucts" v-else>
    <div class="top-header">
      <h2>Top products</h2>
    </div>
    <div class="top-content">
      <div
        class="box-wrap"
        v-for="filteredProduct in filterProducts"
        :key="filteredProduct.id"
      >
        <product-box :product="filteredProduct" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-wrap {
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top-header {
  text-align: center;
  margin: 20px auto;
}
.top-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  grid-column-gap: 2em;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
}
</style>

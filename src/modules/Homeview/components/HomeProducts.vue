<script setup>
import ProductBox from '../../../components/ProductBox.vue';

const props = defineProps(["filterProducts"]);
</script>

<template>
  <div class="section-wrap propucts">
    <div class="top-header">
      <h2>Top products</h2>
    </div>
    <div class="top-content">
      <div
        class="box-wrap"
        v-for="filteredProduct in props.filterProducts"
        :key="filteredProduct.id"
      >
        <ProductBox :product="filteredProduct" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-wrap {
  margin-bottom: 20px;
}
.top-header {
  text-align: center;
  margin: 20px auto;
}
.top-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

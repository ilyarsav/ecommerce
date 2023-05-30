<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductBox from "../../components/ProductBox.vue";
import { useCategoryStore } from "../../stores/category.store";
import { storeToRefs } from "pinia";

const categoryStore = useCategoryStore();
const { category } = storeToRefs(categoryStore);
const { findCategory } = categoryStore;
const msg = ref(null);

onMounted(async () => {
  await categoryStore.fetchCategories();
  findCategory();

  if (category.value.products == 0) {
    msg.value = "no products";
  } else if (category.value.products == 1) {
    msg.value = "only 1 product";
  } else {
    msg.value = category.value.products?.length + " products found";
  }
});
</script>

<template>
  <div class="container">
    <div class="header-text">
      <h4>{{ category.categoryName }}</h4>
      <h5>{{ msg }}</h5>
    </div>
    <div class="content">
      <product-box
        :product="product"
        v-for="product of category.products"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
}
.header-text {
  text-align: center;
}
.header-text h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
.header-text h5 {
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 20px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

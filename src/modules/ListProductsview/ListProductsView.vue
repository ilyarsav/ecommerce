<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductBox from "../../components/ProductBox.vue";
import { useCategoryStore } from "../../stores/category";

const categoryStore = useCategoryStore();
const route = useRoute();
const { id } = route.params;
const category = ref({});
const msg = ref(null);

onMounted(() => {
  category.value = categoryStore.categories.find(
    (category) => category.id == id
  );

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
    <div class="content" v-for="product of category.products" :key="product.id">
      <ProductBox :product="product" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>

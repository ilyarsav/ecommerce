<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductBox from "../../components/Product/ProductBox.vue";

const props = defineProps(["baseURL", "categories"]);
const route = useRoute();

const id = ref(null);
const category = ref({});
const msg = ref(null);

onMounted(() => {
  id.value = route.params.id;
  category.value = props.categories.find((category) => category.id == id.value);

  if (category.value.products == 0) {
    msg.value = "no products";
  } else if (category.value.products == 1) {
    msg.value = "only 1 product";
  } else {
<<<<<<< HEAD
    msg.value = category.value.products?.length + " products found";
=======
    msg.value = category.product?.length + " products found";
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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
<<<<<<< HEAD
  margin-bottom: 20px;
=======
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
}
</style>

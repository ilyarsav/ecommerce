<script setup>
import { ref, onMounted } from "vue";
import ProductBox from "../../components/Product/ProductBox.vue";

const props = defineProps(["baseURL"]);

const token = ref("");
const products = ref(null);

const fetchWishList = async () => {
  await fetch(`${props.baseURL}/wishlist/${token.value}`)
    .then((res) => res.json())
    .then((res) => (products.value = res))
    .catch((err) => console.log(err));
};

onMounted(() => {
  token.value = localStorage.getItem("token");
  fetchWishList();
});
</script>

<template>
  <div class="container">
    <div class="header">
      <h4>Your WishList</h4>
    </div>
    <div class="content-wrap">
      <div v-for="product in products" :key="product.id">
        <ProductBox :product="product" class="box" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
.header {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
}
.content-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Modal from "../../components/Modal.vue";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import EditProductCtgry from "./components/EditProductCtgry.vue";
import EditProductDscrptn from "./components/EditProductDscrptn.vue";
import EditProductImg from "./components/EditProductImg.vue";
import EditProductNm from "./components/EditProductNm.vue";
import EditProductPrc from "./components/EditProductPrc.vue";

const productStore = useProductStore();
const categoryStore = useCategoryStore();

const product = ref({});
const id = ref(null);
const route = useRoute();
const router = useRouter()
const isModal = ref(false);
const modalText = ref("Successfully edited");

const editProduct = () => {
  productStore.editProducts(id.value, product.value);
  switchModal(true);
};

const switchModal = (bln) => {
  isModal.value = bln;
  router.push({ name: "Product" });
};

onMounted(() => {
  id.value = route.params.id;
  product.value = productStore.products.find(
    (product) => product.id == id.value
  );
});
</script>

<template>
  <div class="container">
    <Modal
      @switchModal="switchModal"
      :isModal="isModal"
      :modalText="modalText"
    />
    <h1>Edit product</h1>
    <form v-if="product">
      <EditProductCtgry
        :product="product.categoryId"
        :categories="categoryStore.categories"
      />
      <EditProductNm :name="product.name" />
      <EditProductDscrptn :description="product.description" />
      <EditProductImg :imageURL="product.imageURL" />
      <EditProductPrc :price="product.price" />
      <button type="button" class="button" @click="editProduct">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 20px;
}
.button {
  border: none;
  padding: 15px 180px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
}
</style>

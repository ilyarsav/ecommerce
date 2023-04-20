<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import Modal from "../../components/Modal.vue";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import ShowDetailsCartBtn from "./components/ShowDetailsCartBtn.vue";
import ShowDetailsFtrs from "./components/ShowDetailsFtrs.vue";
import ShowDetailsImg from "./components/ShowDetailsImg.vue";
import ShowDetailsInfrm from "./components/ShowDetailsInfrm.vue";
import WishListBtn from "./components/WishListBtn.vue";
// при обновлении данные пропадают

const productStore = useProductStore();
const categoryStore = useCategoryStore();
const route = useRoute();
const product = ref({});
const category = ref({});
const id = ref(null);
const token = ref("");
const isModal = ref(false);
const modalText = ref("");

const switchModal = (bln) => {
  isModal.value = bln;
};

const changeModalText = (text) => {
  modalText.value = text;
};

onMounted(() => {
  token.value = localStorage.getItem("token");
  id.value = route.params.id;

  product.value = productStore.products.find(
    (product) => product.id == id.value
  );

  category.value = categoryStore.categories.find(
    (category) => category.id == product.value.categoryId
  );
});
</script>

<template>
  <div class="container">
    <Modal
      @switch-modal="switchModal()"
      :isModal="isModal"
      :modalText="modalText"
    />
    <ShowDetailsImg :src="product.imageURL" />

    <div class="show-information-wrap">
      <ShowDetailsInfrm
        :name="product.name"
        :categoryName="product.categoryName"
        :price="product.price"
        :description="product.description"
      />
      <ShowDetailsCartBtn
        :token="token"
        @switch-modal="switchModal"
        @changeModalText="changeModalText"
        :id="id"
      />
      <ShowDetailsFtrs />
      <WishListBtn
        :token="token"
        :id="id"
        @switch-modal="switchModal"
        @changeModalText="changeModalText"
      />
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
</style>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import Modal from "../../components/Modal.vue";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import ShowDetailsCartBtn from "./components/ShowDetailsCartBtn.vue";
import WishListBtn from "./components/WishListBtn.vue";

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
      @switch-modal="switchModal"
      :isModal="isModal"
      :modalText="modalText"
    />
    <div class="show-image-wrap">
      <img :src="product.imageURL" />
    </div>
    <div class="show-information-wrap">
      <h4>{{ product.name }}</h4>
      <h6>{{ category.categoryName }}</h6>
      <h5>{{ product.price }}$</h5>
      <p>{{ product.description }}</p>
      <ShowDetailsCartBtn
        :token="token"
        @switch-modal="switchModal"
        @changeModalText="changeModalText"
        :id="id"
      />
      <div class="features">
        <h5>Features</h5>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
        </ul>
      </div>
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
.show-image-wrap img {
  max-width: 400px;
}

.show-information-wrap {
  margin-left: 40px;
}
.show-information-wrap h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
.show-information-wrap h5 {
  font-size: 18px;
  margin-bottom: 10px;
}
.show-information-wrap h6 {
  font-size: 17px;
  margin-bottom: 10px;
}
.show-information-wrap p {
  font-size: 14px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
}

.features {
  margin-top: 20px;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Modal from "../../components/Modal.vue";
import { useCategoryStore } from "../../stores/category";
import EditCategoryDscrptn from "./components/EditCategoryDscrptn.vue";
import EditCategoryImgUrl from "./components/EditCategoryImgUrl.vue";
import EditCategoryNm from "./components/EditCategoryNm.vue";

const categoryStore = useCategoryStore();
const category = ref({});
const id = ref(null);
const route = useRoute();
const router = useRouter();
const isModal = ref(false);
const modalText = ref("successfully added");

const editCategory = async () => {
  delete category.value.products;
  categoryStore.editCategories(category.value, id.value);
  isModal.value = true;
};

const switchModal = (bln) => {
  isModal.value = bln;
  router.push({ name: "Category" });
};

onMounted(() => {
  id.value = route.params.id;

  category.value = categoryStore.categories.find(
    (category) => category.id == id.value
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
    <h1>Edit category</h1>
    <form v-if="category">
      <EditCategoryNm :categoryName="category.categoryName" />
      <EditCategoryDscrptn :description="category.description" />
      <EditCategoryImgUrl :imageUrl="category.imageUrl" />
      <button type="button" class="button" @click="editCategory()">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../../stores/category";

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

const closeModal = () => {
  isModal.value = false;
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
    <div class="dark-background" v-if="isModal">
      <div class="modal">
        <p>{{ modalText }}</p>
        <button class="button" @click="closeModal">OK</button>
      </div>
    </div>

    <h1>Edit category</h1>

    <form v-if="category">
      <div class="input-container">
        <label for="name">Category Name</label>
        <input
          type="text"
          name="name"
          v-model="category.categoryName"
          required
        />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <textarea
          type="text"
          name="name"
          v-model="category.description"
          required
        ></textarea>
      </div>
      <div class="input-container">
        <label for="name">Image</label>
        <input type="text" name="name" v-model="category.imageUrl" required />
      </div>

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
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input-container input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
.button {
  border: none;
  padding: 15px 180px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
}
.dark-background {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>

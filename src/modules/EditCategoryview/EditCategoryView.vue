<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../../stores/category";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const categoryStore = useCategoryStore();
const category = ref({});
const route = useRoute();
const router = useRouter();
const { id } = route.params;
const toast = useToast();

// const successfullyAdded = {
//   severity: "success",
//   detail: "Successfully added",
// };

// const show = (data) => {
//   toast.add(data);
// };

const editCategory = async () => {
  delete category.value.products;
  await categoryStore.editCategories(category.value, id);
  // show(successfullyAdded);
  router.push({ name: "Category" });
};

onMounted(() => {
  category.value = categoryStore.categories.find(
    (category) => category.id == id
  );
});
</script>

<template>
  <div class="container">
    <!-- <Toast position="bottom-right" /> -->
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
.button {
  border: none;
  padding: 15px 180px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
.input-container input {
  height: 30px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>

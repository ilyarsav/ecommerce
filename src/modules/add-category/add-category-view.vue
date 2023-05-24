<script setup>
import { ref } from "vue";
import { useCategoryStore } from "../../stores/category.store";
import { useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRouter();

const categoryName = ref("");
const description = ref("");
const imageUrl = ref("");

const addCategory = async () => {
  const newCategory = {
    categoryName: categoryName.value,
    description: description.value,
    imageUrl: imageUrl.value,
  };

  await categoryStore.addCategories(newCategory);
  router.push({ name: "Category" });
};
</script>

<template>
  <div class="container">
    <h1>Add category</h1>
    <form>
      <div class="input-container">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="categoryName" />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <textarea type="text" name="name" v-model="description"></textarea>
      </div>
      <div class="input-container">
        <label for="name">Image</label>
        <input type="text" name="name" v-model="imageUrl" />
      </div>
      <button type="button" class="button" @click="addCategory">Submit</button>
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

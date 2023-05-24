<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product.store";

const productStore = useProductStore();
const categoryStore = useCategoryStore();
const router = useRouter();

const categoryId = ref(null);
const name = ref(null);
const description = ref(null);
const imageURl = ref(null);
const price = ref(null);

const addProduct = async () => {
  const newProduct = {
    categoryId: categoryId.value,
    name: name.value,
    description: description.value,
    imageURl: imageURl.value,
    price: price.value,
  };

  await productStore.addProducts(newProduct);
  router.push({ name: "Product" });
};
</script>

<template>
  <div class="container">
    <h1>Add product</h1>
    <form>
      <div class="input-container">
        <label for="name">Category</label>
        <select v-model="categoryId" required>
          <option
            v-for="category in categoryStore.categories"
            :value="category.id"
            :key="category.id"
          >
            {{ category.categoryName }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <textarea type="text" name="name" v-model="description"></textarea>
      </div>
      <div class="input-container">
        <label for="name">Image Url</label>
        <input type="text" name="name" v-model="imageURl" />
      </div>
      <div class="input-container">
        <label for="name">Price</label>
        <input type="text" name="name" v-model="price" />
      </div>
      <button type="button" class="button" @click="addProduct">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0 20px 0;
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
</style>

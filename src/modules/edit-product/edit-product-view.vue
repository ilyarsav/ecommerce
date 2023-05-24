<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../../stores/category.store";
import { useProductStore } from "../../stores/product";

const productStore = useProductStore();
const categoryStore = useCategoryStore();

const product = ref({});
const route = useRoute();
const router = useRouter();
const { id } = route.params;

const editProduct = async () => {
  await productStore.editProducts(id, product.value);
  router.push({ name: "Product" });
};

onMounted(async () => {
  await productStore.fetchProducts();
  await categoryStore.fetchCategories();
  product.value = productStore.products.find((product) => product.id == id);
});
</script>

<template>
  <div class="container">
    <!-- <Toast position="bottom-right" /> -->
    <h1>Edit product</h1>
    <form>
      <div class="input-container">
        <label for="name">Category</label>
        <select
          name="name"
          v-model="product.categoryId"
          required
          class="select"
        >
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
        <input type="text" name="name" v-model="product.name" required />
      </div>
      <div class="input-container">
        <label for="name">Description</label>
        <textarea
          type="text"
          name="name"
          v-model="product.description"
          required
        ></textarea>
      </div>
      <div class="input-container">
        <label for="name">ImageURL</label>
        <input type="text" name="name" v-model="product.imageURL" required />
      </div>
      <div class="input-container">
        <label for="name">Price</label>
        <input type="text" name="name" v-model="product.price" required />
      </div>
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
.select {
  min-width: 300px;
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
</style>

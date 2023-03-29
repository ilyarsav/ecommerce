<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../../stores/product";

const productStore = useProductStore();
const props = defineProps(["baseURL", "products", "categories"]);
const product = ref(null);
const id = ref(null);
const route = useRoute();
const router = useRouter();
const isModal = ref(false);
const modalText = ref("Successfully edited");

const editProduct = async () => {
  productStore.editProducts(id.value, product.value);
  isModal.value = true;
};

const closeModal = () => {
  isModal.value = false;
  // emit("fetchData");
  router.push({ name: "Product" });
};

onMounted(() => {
  id.value = route.params.id;
  product.value = props.products.find((product) => product.id == id.value);
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

    <h1>Edit product</h1>

    <form v-if="product">
      <div class="input-container">
        <label for="name">Category</label>
        <select name="name" v-model="product.categoryId" required>
          <option
            :value="category.id"
            :key="category.id"
            v-for="category in props.categories"
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

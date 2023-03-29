<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
<<<<<<< HEAD
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";

const productStore = useProductStore();
const categoryStore = useCategoryStore();
=======
const props = defineProps(["baseURL", "categories"]);
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d

const categoryId = ref(null);
const name = ref(null);
const description = ref(null);
const imageURl = ref(null);
const price = ref(null);
const router = useRouter();

<<<<<<< HEAD
const addProduct = async () => {
=======
const addProduct = () => {
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
  const newProduct = {
    categoryId: categoryId.value,
    name: name.value,
    description: description.value,
    imageURl: imageURl.value,
    price: price.value,
  };

<<<<<<< HEAD
  productStore.addProducts(newProduct).then(() => {
    router.push({ name: "Product" });
  });

  // fetch(`${props.baseURL}/product/add`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(newProduct),
  // })
  //   .then(() => {
  //     router.push({ name: "Product" });
  //   })
  //   .catch((err) => console.log(err));
=======
  fetch(`${props.baseURL}/product/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then(() => {
      router.push({ name: "Product" });
    })
    .catch((err) => console.log(err));
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
};
</script>

<template>
  <div class="container">
    <h1>Add category</h1>
    <form>
      <div class="input-container">
        <label for="name">Category</label>
        <select v-model="categoryId" required>
          <option
<<<<<<< HEAD
            v-for="category in categoryStore.categories"
=======
            v-for="category in props.categories"
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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

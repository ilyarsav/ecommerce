<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
<<<<<<< HEAD
import { useCategoryStore } from "../../stores/category";

const categoryStore = useCategoryStore();
const category = ref({});
=======

const props = defineProps(["baseURL", "categories"]);
const category = ref(null);
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
const id = ref(null);
const route = useRoute();
const router = useRouter();
const isModal = ref(false);
const modalText = ref("successfully added");
<<<<<<< HEAD

const editCategory = async () => {
  delete category.value.products;
  categoryStore.editCategories(category.value, id.value);
=======
const emit = defineEmits(["fetchData"]);

const editCategory = async () => {
  delete category.value.products;

  await fetch(`${props.baseURL}/category/update/${id.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category.value),
  }).catch((err) => console.log(err));
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d

  isModal.value = true;
};

const closeModal = () => {
  isModal.value = false;
<<<<<<< HEAD
=======
  emit("fetchData");
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
  router.push({ name: "Category" });
};

onMounted(() => {
  id.value = route.params.id;
<<<<<<< HEAD
  category.value = categoryStore.categories.find(
    (category) => category.id == id.value
  );
=======
  category.value = props.categories.find((category) => category.id == id.value);
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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
<<<<<<< HEAD
      <button type="button" class="button" @click="editCategory()">
        Submit
      </button>
=======
      <button type="button" class="button" @click="editCategory">Submit</button>
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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
<<<<<<< HEAD
  margin-top: 20px;
=======
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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

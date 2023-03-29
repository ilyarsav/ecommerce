<script setup>
import { ref } from "vue";
<<<<<<< HEAD
import { useCategoryStore } from "../../stores/category";

const categoryStore = useCategoryStore();
=======

>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
const categoryName = ref("");
const description = ref("");
const imageUrl = ref("");
const isModal = ref(false);
const modalText = ref("Category added successfully");

const addCategory = () => {
  const newCategory = {
    categoryName: categoryName.value,
    description: description.value,
    imageUrl: imageUrl.value,
  };

<<<<<<< HEAD
  categoryStore.addCategories(newCategory);
=======
  const baseURL = "https://limitless-lake-55070.herokuapp.com";

  fetch(`${baseURL}/category/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  }).catch((err) => console.log(err));
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d

  isModal.value = true;
};

const closeModal = () => {
  isModal.value = false;
  categoryName.value = "";
  description.value = "";
  imageUrl.value = "";
};
</script>
<<<<<<< HEAD

=======
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
<template>
  <div class="container">
    <div class="dark-background" v-if="isModal">
      <div class="modal">
        <p>{{ modalText }}</p>
        <button class="button" @click="closeModal">OK</button>
      </div>
    </div>

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
<<<<<<< HEAD

=======
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
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

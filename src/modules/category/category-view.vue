<script setup>
import { onMounted } from "vue";
import CategoryBox from "../../components/CategoryBox.vue";
import { useCategoryStore } from "../../stores/category.store";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchCategories();
});
</script>

<template>
  <div class="container">
    <h1>Our categories</h1>

    <div class="button-wrap">
      <router-link :to="{ name: 'AddCategory' }">
        <button class="button">Add category</button>
      </router-link>
    </div>

    <div class="category-wrap">
      <div v-for="category of categoryStore.categories" :key="category.id">
        <category-box :category="category" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.container {
  margin-top: 80px;
}
.container h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}
.button-wrap {
  display: flex;
  justify-content: end;
}
.button {
  border: none;
  padding: 15px 10px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>

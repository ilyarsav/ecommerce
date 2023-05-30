<script setup>
import { storeToRefs } from "pinia";
import Dropdown from "primevue/dropdown";

const props = defineProps(["productStore", "categoryStore"]);
const { categoryId } = storeToRefs(props.productStore);
const { categories } = storeToRefs(props.categoryStore);
</script>

<template>
  <div class="input-container">
    <label for="name">Category</label>
    <Dropdown
      v-model="categoryId"
      :options="categories"
      optionLabel="categoryName"
      optionValue="id"
      class="dropdown"
      filter 
    />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.dropdown {
  width: 300px;
}
.select {
  min-width: 0.3px;
}
</style>

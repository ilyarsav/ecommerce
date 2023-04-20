<script setup>
const props = defineProps(["product", "categories"]);
</script>

<template>
  <div class="input-container">
    <label for="name">Category</label>
    <select name="name" v-model="props.product" required>
      <option
        v-for="category in props.categories"
        :value="category.id"
        :key="category.id"
      >
        {{ category.categoryName }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
</style>

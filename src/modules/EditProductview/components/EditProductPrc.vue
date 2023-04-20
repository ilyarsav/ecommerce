<script setup>
const props = defineProps(["price"]);
</script>

<template>
  <div class="input-container">
    <label for="name">Price</label>
    <input type="text" name="name" v-model="props.price" required />
  </div>
</template>

<style scoped>
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
</style>

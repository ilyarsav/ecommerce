<script setup>
const props = defineProps(["imageUrl"]);
</script>

<template>
  <div class="input-container">
    <label for="name">Image</label>
    <input type="text" name="name" v-model="props.imageUrl" required />
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

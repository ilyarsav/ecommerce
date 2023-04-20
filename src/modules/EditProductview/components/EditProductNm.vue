<script setup>
const props = defineProps(["name"]);
</script>
<template>
  <div class="input-container">
    <label for="name">Name</label>
    <input type="text" name="name" v-model="props.name" required />
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

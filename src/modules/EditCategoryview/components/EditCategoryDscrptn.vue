<script setup>
const props = defineProps('description')
</script>

<template>
  <div class="input-container">
    <label for="name">Description</label>
    <textarea
      type="text"
      name="name"
      v-model="props.description"
      required
    ></textarea>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>

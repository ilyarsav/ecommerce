<script setup>
const props = defineProps(["imageURL"]);
</script>

<template>
  <img :src="props.imageURL" class="image" />
</template>

<style scoped>
.image {
  width: 300px;
  margin-right: 20px;
}
</style>

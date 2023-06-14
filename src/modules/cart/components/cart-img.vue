<script setup>
const props = defineProps(['imageURL'])
</script>

<template>
  <div class="image-wrap">
    <img :src="props.imageURL" class="image" />
  </div>
</template>

<style scoped>
.image {
  width: 300px;
  margin-right: 20px;
}
</style>

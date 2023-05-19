<script setup>
const props = defineProps(["src"]);
</script>

<template>
  <div class="show-image-wrap">
    <img :src="props.src" />
  </div>
</template>

<style scoped>
.show-image-wrap img {
  max-width: 400px;
}
</style>

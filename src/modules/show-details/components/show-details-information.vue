<script setup>
const props = defineProps(["name", "categoryName", "price", "description"]);
</script>

<template>
  <h4>{{ props.name }}</h4>
  <h6>{{ props.categoryName }}</h6>
  <h5>{{ props.price }}$</h5>
  <p>{{ props.description }}</p>
</template>

<style scoped>
h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
h5 {
  font-size: 18px;
  margin-bottom: 10px;
}
h6 {
  font-size: 17px;
  margin-bottom: 10px;
}
p {
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

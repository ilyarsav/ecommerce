<script setup>
const props = defineProps(["cartItem"]);
</script>

<template>
  <router-link
    class="link"
    :to="{
      name: 'ShowDetails',
      params: { id: props.cartItem.id },
    }"
  >
    {{ props.cartItem.name }}
  </router-link>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: rgb(4, 17, 192);
  font-weight: 700;
  font-size: 18px;
}
.link:hover {
  color: rgb(192, 4, 4);
}
</style>

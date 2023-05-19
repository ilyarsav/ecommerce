<script setup>
const props = defineProps(["cartItem"]);
</script>

<template>
  <p class="information-item itemName">
    <router-link
      class="link"
      :to="{
        name: 'ShowDetails',
        params: { id: props.cartItem.id },
      }"
    >
      {{ props.cartItem.name }}
    </router-link>
  </p>
</template>

<style scoped>
.information-item {
  margin: 10px;
}
.link {
  text-decoration: none;
  color: rgb(4, 17, 192);
}
.itemName {
  font-weight: 700;
}
</style>

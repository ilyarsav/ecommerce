<script setup>
defineProps(["product"]);
</script>

<template>
  <router-link
    :to="{ name: 'ShowDetails', params: { id: product?.id } }"
    class="card-title"
  >
    <h3 class="card-title">
      {{
        product?.name?.length > 20
          ? product?.name?.slice(0, 20) + "..."
          : product?.name
      }}
    </h3>
  </router-link>
</template>

<style scoped>
.card-title {
  margin: auto;
  color: black;
  text-decoration: none;
  font-size: 25px;
}
.card-title:hover {
  margin: auto;
  color: brown;
  text-decoration: none;
  font-size: 25px;
}
</style>

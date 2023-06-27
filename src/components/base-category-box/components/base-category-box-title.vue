<script setup>
defineProps(["category"]);
</script>

<template>
  <router-link
    :to="{ name: 'ListProducts', params: { id: category.id } }"
    class="card-title"
  >
    <h3>
      {{
        category.categoryName?.length > 23
          ? category.categoryName?.slice(0, 23) + "..."
          : category.categoryName
      }}
    </h3>
  </router-link>
</template>

<style scoped>
.card-title {
  margin: auto;
  color: black;
  text-decoration: none;
  font-size: 24px;
}
.card-title:hover {
  margin: auto;
  color: brown;
  text-decoration: none;
}
</style>

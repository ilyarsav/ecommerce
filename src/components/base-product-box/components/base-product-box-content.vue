<script setup>
defineProps(["product", "route"]);
</script>

<template>
  <p class="card-price" v-show="route.name === 'Home'">${{ product?.price }}</p>
  <p class="card-text">
    {{
      product?.description?.length > 42
        ? product.description?.slice(0, 42) + "..."
        : product.description
    }}
  </p>
</template>

<style scoped>
.card-price {
  margin-bottom: 10px;
}
</style>

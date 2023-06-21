<script setup>
defineProps(["category"]);
</script>

<template>
  <p>
    {{
      category.description?.length > 42
        ? category.description?.slice(0, 42) + "..."
        : category.description
    }}
  </p>
</template>

<style scoped></style>

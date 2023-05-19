<script setup>
const props = defineProps(["totalCost"]);
</script>

<template>
  <div class="total-cost">
    <b>Total: ${{ totalCost }}</b>
  </div>
</template>

<style scoped>
.total-cost {
  margin-top: 20px;
  margin-left: 600px;
  font-size: 22px;
}
</style>

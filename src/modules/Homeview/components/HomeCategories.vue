<script setup>
import CategoryBox from '../../../components/Category/CategoryBox.vue';

const props = defineProps(["filterCategories"]);
</script>

<template>
  <div class="section-wrap categories">
    <div class="top-header">
      <h2>Top categories</h2>
    </div>
    <div class="top-content">
      <div
        class="box-wrap"
        v-for="filteredCategory in props.filterCategories"
        :key="filteredCategory.id"
      >
        <CategoryBox :category="filteredCategory" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-wrap {
  margin-bottom: 20px;
}
.top-header {
  text-align: center;
  margin: 20px auto;
}
.top-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

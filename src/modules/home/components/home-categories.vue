<script setup>
import { storeToRefs } from "pinia";
import CategoryBox from "../../../components/CategoryBox.vue";
import ProgressSpinner from "primevue/progressspinner";

const props = defineProps(["categoryStore"]);
const { filterCategories, categoryLoading } = storeToRefs(props.categoryStore);
</script>

<template>
  <div class="spinner-wrap" v-if="categoryLoading">
    <ProgressSpinner />
  </div>
  <div v-else class="section-wrap categories">
    <div class="top-header">
      <h2>Top categories</h2>
    </div>
    <div class="top-content">
      <div
        class="box-wrap"
        v-for="filteredCategory in filterCategories"
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
.spinner-wrap {
  display: flex;
  justify-content: center;
}
</style>

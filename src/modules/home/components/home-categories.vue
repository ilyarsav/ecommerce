<script setup>
import { storeToRefs } from "pinia";
import CategoryBox from "../../../components/base-category-box/base-category-box.vue";
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
        <category-box :category="filteredCategory" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-wrap {
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top-header {
  text-align: center;
  margin: 20px auto;
}
.top-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  grid-column-gap: 2em;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
}
</style>

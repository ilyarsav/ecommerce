<script setup>
import BaseCategoryBoxTitle from "../base-category-box/components/base-category-box-title.vue";
import BaseCategoryBoxContent from "../base-category-box/components/base-category-box-content.vue";
import BaseCategoryBoxFooter from "../base-category-box/components/base-category-box-footer.vue";
import { useRoute } from "vue-router";
import Card from "primevue/card";

defineProps(["category"]);

const route = useRoute();
</script>

<template>
  <Card class="card">
    <template #header>
      <img class="card-image" :src="category?.imageUrl" alt="Card image cap" />
    </template>
    <template #title>
      <base-category-box-title :category="category" />
    </template>
    <template #content>
      <base-category-box-content :category="category" />
    </template>
    <template #footer>
      <base-category-box-footer :category="category" :route="route" />
    </template>
  </Card>
</template>

<style scoped>
.card {
  width: 400px;
  min-height: 380px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 6px rgb(173, 173, 173);
}
.card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>

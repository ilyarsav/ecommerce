<script setup>
import { storeToRefs } from "pinia";
import Textarea from "primevue/textarea";

const props = defineProps(["productStore"]);
const { description } = storeToRefs(props.productStore);
</script>

<template>
  <div class="input-container">
    <label for="name">Description</label>
    <Textarea v-model="description" rows="5" cols="30" id="name" />
  </div>
</template>

<style scoped>
#name {
  max-width: 300px;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.input-container textarea {
  height: 40px;
  width: 300px;
  margin-top: 0.5rem;
}
</style>

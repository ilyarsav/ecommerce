<script setup>
import { storeToRefs } from "pinia";
import InlineMessage from "primevue/inlinemessage";

const props = defineProps(["signInStore"]);
const { isAlert } = storeToRefs(props.signInStore);
</script>

<template>
  <div class="input-container">
    <InlineMessage v-if="isAlert" severity="error" class="alert">
      Неправльно указан логин и/или пароль
    </InlineMessage>
  </div>
</template>

<style>
.alert {
  color: red;
}
</style>

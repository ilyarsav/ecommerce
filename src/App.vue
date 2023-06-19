<script setup>
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import BaseNavbar from "./modules/navbar/navbar.vue";
import BaseFooter from "./components/base-footer.vue";
</script>

<template>
  <div class="container">
    <base-navbar />
    <div class="content">
      <router-view />
    </div>
    <base-footer />
  </div>
</template>

<style scoped>
.content {
  min-height: 100vh;
}
</style>

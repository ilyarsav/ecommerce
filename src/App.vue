<script setup>
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import BaseNavbar from "./components/base-navbar.vue";
import BaseFooter from "./components/base-footer.vue";
</script>

<template>
  <div class="container">
    <div class="nav">
      <base-navbar />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <base-footer />
    </div>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.content {
  margin-top: 50px;
  min-height: 70vh;
}
</style>

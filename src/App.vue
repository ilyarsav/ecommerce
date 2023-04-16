<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <div class="nav">
      <Navbar />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <Footer></Footer>
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

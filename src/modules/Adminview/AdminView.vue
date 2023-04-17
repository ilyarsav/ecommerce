<script setup></script>

<template>
  <div class="button-wrap">
    <router-link :to="{ name: 'Category' }">
      <button class="button">Admin category</button>
    </router-link>
    
    <router-link :to="{ name: 'Product' }">
      <button class="button">Admin product</button>
    </router-link>
  </div>
</template>

<style scoped>
.button {
  border: none;
  padding: 15px;
  width: 200px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
  margin-bottom: 40px;
  font-size: 18px;
}
.button-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}
</style>

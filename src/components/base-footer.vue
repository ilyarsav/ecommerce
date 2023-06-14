<script setup></script>

<template>
  <footer class="container">
    <div class="footer-wrap">
      <ul class="list">
        <li class="list-item first">Get to know us</li>
        <div class="list-item">
          <a href="#">About us</a>
        </div>
        <div class="list-item">
          <a href="#">Android app</a>
        </div>
        <div class="list-item">
          <a href="#">IOS app</a>
        </div>
      </ul>

      <ul class="list">
        <li class="list-item first">Connecy with us</li>
        <div class="list-item">
          <a href="#">About us</a>
        </div>
        <div class="list-item">
          <a href="#">Android app</a>
        </div>
        <div class="list-item">
          <a href="#">IOS app</a>
        </div>
      </ul>

      <ul class="list">
        <li class="list-item first">Make money with us</li>
        <div class="list-item">
          <a href="#">About us</a>
        </div>
        <div class="list-item">
          <a href="#">Android app</a>
        </div>
        <div class="list-item">
          <a href="#">IOS app</a>
        </div>
      </ul>

      <ul class="list">
        <li class="list-item first">Let us help u</li>
        <div class="list-item">
          <a href="#">About us</a>
        </div>
        <div class="list-item">
          <a href="#">Android app</a>
        </div>
        <div class="list-item">
          <a href="#">IOS app</a>
        </div>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.container {
  background-color: rgb(212, 212, 212);
  font-weight: 100;
}
.footer-wrap {
  max-width: 80%;
  margin: auto;
  padding: 30px 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
}
.list {
  list-style: none;
}
.first {
  font-weight: bold;
}
.list-item {
  margin-bottom: 10px;
}
.list-item a {
  color: black;
  text-decoration: none;
}
</style>

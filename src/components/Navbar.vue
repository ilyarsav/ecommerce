<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../modules/cart/store/cart.store";

const isOpenAccount = ref(false);
const account = ref(null);

const isOpenBrowse = ref(false);
const browse = ref(null);

const token = ref("");
const cartStore = useCartStore();
const router = useRouter();

const openDropdownAccount = () => {
  isOpenAccount.value = !isOpenAccount.value;
};

const closeDropdownAccount = (e) => {
  if (!account.value.contains(e.target) && account.value !== e.target) {
    isOpenAccount.value = false;
  }
};

const openDropdownBrowse = () => {
  isOpenBrowse.value = !isOpenBrowse.value;
};

const closeDropdownBrowse = (e) => {
  if (!browse.value.contains(e.target) && browse.value !== e.target) {
    isOpenBrowse.value = false;
  }
};

const signOut = () => {
  localStorage.removeItem("token");
  token.value = "";
  router.push({ name: "Home" });
};

onBeforeMount(async () => {
  token.value = localStorage.getItem("token");
  await cartStore.getCartData(token.value);
  document.addEventListener("click", closeDropdownBrowse);
  document.addEventListener("click", closeDropdownAccount);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdownBrowse);
  document.removeEventListener("click", closeDropdownAccount);
});
</script>

<template>
  <div class="container">
    {{ account }}
    <div class="logo navbar-item">
      <router-link :to="{ name: 'Home' }" class="link">LOGO</router-link>
    </div>

    <!-- <div class="search navbar-item">
      <input type="text" />
      <button>search</button>
    </div> -->

    <div class="navbar navbar-item">
      <div class="dropdown-browse">
        <a class="nav-item" @click="openDropdownBrowse" ref="browse">Browse</a>

        <div v-show="isOpenBrowse">
          <ul class="menu">
            <li class="menu-item">
              <router-link :to="{ name: 'Home' }" class="link">
                Home
              </router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'Product' }" class="link">
                Product
              </router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'Category' }" class="link">
                Category
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown">
        <a class="nav-item" @click="openDropdownAccount" ref="account">
          Account
        </a>

        <div v-show="isOpenAccount">
          <ul class="menu">
            <li class="menu-item" v-if="token">
              <router-link :to="{ name: 'WishList' }" class="link">
                WishList
              </router-link>
            </li>
            <li class="menu-item" v-if="!token">
              <router-link :to="{ name: 'SignIn' }" class="link">
                Sign In
              </router-link>
            </li>
            <li class="menu-item" v-if="!token">
              <router-link :to="{ name: 'SignUp' }" class="link">
                Sign Up
              </router-link>
            </li>
            <li class="menu-item" @click="signOut()" v-if="token">
              <a href="#" class="link">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cart">
        <router-link :to="{ name: 'Cart' }">
          <span class="nav-cart-count" v-if="token">
            {{ cartStore.cartItems.length }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            class="cart-icon"
          >
            <path
              d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(39, 39, 39);
  padding: 15px;
}

.link {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  text-decoration: none;
  margin-left: 5px;
}

.navbar .link {
  font-weight: normal;
}

.navbar-item {
  margin: auto 30px;
}

.nav-item {
  cursor: pointer;
}

.cart {
  position: relative;
}

.nav-cart-count {
  color: white;
  text-decoration: none;
  position: absolute;
  background-color: red;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 50%;
  margin-left: 23px;
  top: -5px;
}

/* dropdown */
.dropdown-background {
  background: black;
  opacity: 0.2;
  pointer-events: none;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.navbar {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin: auto 5px;
}

.menu {
  position: absolute;
  z-index: 2;
  list-style-type: none;
  margin: 5px 0;
  padding: 0;

  border: 1px solid grey;
  width: 150px;
}

.menu > li {
  margin: 0;
  background-color: white;
}

.menu > li:hover {
  margin: 0;
  background-color: rgb(190, 190, 190);
}

.menu .link {
  width: 100%;
  height: 100%;
  text-align: left;
  color: black;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
}

.dropdown-browse {
  position: relative;
  display: inline-block;
  margin: auto 5px;
}

/* dropdown */
.cart-icon {
  fill: white;
  margin-left: 10px;
}
</style>

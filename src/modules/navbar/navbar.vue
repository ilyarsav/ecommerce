<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Menubar from "primevue/menubar";
import "primeicons/primeicons.css";

const token = ref("");

const router = useRouter();
const visible = ref(true);

const items = ref([
  {
    label: "Browse",
    items: [
      {
        label: "Products",
        to: "/product",
      },
      {
        label: "Categories",
        to: "/category",
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        label: "WishList",
        to: "/wishlist",
      },
      {
        label: "SignIn",
        to: "/signin",
        visible: () => visible.value,
      },
      {
        label: "SignUp",
        to: "/Signup",
        visible: () => visible.value,
      },
      {
        label: "SignOut",
        visible: () => !visible.value,
        command: () => {
          localStorage.removeItem("token");
          token.value = "";
          router.push({ name: "Home" });
        },
      },
    ],
  },
  {
    label: "Cart",
    icon: "pi pi-shopping-cart p-overlay-badge",
    to: "/cart",
  },
]);

watch(token, (newToken) => {
  if (!newToken) {
    visible.value = true;
  } else {
    visible.value = false;
  }
});

onMounted(() => {
  token.value = localStorage.getItem("token");
});
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <router-link :to="{ name: 'Home' }" class="link">
        <img
          src="../../assets/shopping-logo-svgrepo-com.svg"
          alt="logo"
          class="logo"
        />
      </router-link>
    </template>
  </Menubar>
</template>

<style scoped>
.p-menubar {
  border-radius: 0%;
  border: none;
}
.p-menuitem-text {
  color: white;
}
.logo {
  width: 38px;
}
.link {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  text-decoration: none;
  margin: auto 20px;
}
</style>

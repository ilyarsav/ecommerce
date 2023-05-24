import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../modules/home/home-view.vue"),
      name: "Home",
    },
    {
      path: "/category",
      component: () => import("../modules/category/category-view.vue"),
      name: "Category",
    },
    {
      path: "/product",
      component: () => import("../modules/product/product-view.vue"),
      name: "Product",
    },
    {
      path: "/admin/category/add",
      component: () => import("../modules/add-category/add-category-view.vue"),
      name: "AddCategory",
    },
    {
      path: "/admin/product/add",
      component: () => import("../modules/add-product/add-product-view.vue"),
      name: "AddProduct",
    },
    {
      path: "/admin/category/:id",
      component: () =>
        import("../modules/edit-category/edit-category-view.vue"),
      name: "EditCategory",
    },
    {
      path: "/admin/product/:id",
      component: () => import("../modules/edit-product/edit-product-view.vue"),
      name: "EditProduct",
    },
    {
      path: "/product/show/:id",
      component: () => import("../modules/show-details/show-details-view.vue"),
      name: "ShowDetails",
    },
    {
      path: "/category/show/:id",
      component: () =>
        import("../modules/list-products/list-products-view.vue"),
      name: "ListProducts",
    },
    {
      path: "/signup",
      component: () => import("../modules/sign-up/sign-up-view.vue"),
      name: "SignUp",
    },
    {
      path: "/signin",
      component: () => import("../modules/sign-in/sign-in-view.vue"),
      name: "SignIn",
    },
    {
      path: "/wishlist",
      component: () => import("../modules/wish-list/wish-list-view.vue"),
      name: "WishList",
    },
    {
      path: "/cart",
      component: () => import("../modules/cart/cart-view.vue"),
      name: "Cart",
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;

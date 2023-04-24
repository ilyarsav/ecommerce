import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: import("../modules/Homeview/HomeView.vue"),
      name: "Home",
    },
    {
      path: "/admin",
      component: import("../modules/Adminview/AdminView.vue"),
      name: "Admin",
      children: [
        {
          path: "/admin/category",
          component: import("../modules/Categoryview/CategoryView.vue"),
          name: "Category",
        },
        {
          path: "/admin/product",
          component: import("../modules/Productview/ProductView.vue"),
          name: "Product",
        },
      ],
    },
    {
      path: "/admin/category/add",
      component: import("../modules/AddCategoryview/AddCategoryView.vue"),
      name: "AddCategory",
    },
    {
      path: "/admin/product/add",
      component: import("../modules/AddProductview/AddProductView.vue"),
      name: "AddProduct",
    },
    {
      path: "/admin/category/:id",
      component: import("../modules/EditCategoryview/EditCategoryView.vue"),
      name: "EditCategory",
    },
    {
      path: "/admin/product/:id",
      component: import("../modules/EditProductview/EditProductView.vue"),
      name: "EditProduct",
    },
    {
      path: "/product/show/:id",
      component: import("../modules/ShowDetailsview/ShowDetailsView.vue"),
      name: "ShowDetails",
    },
    {
      path: "/category/show/:id",
      component: import("../modules/ListProductsview/ListProductsView.vue"),
      name: "ListProducts",
    },
    {
      path: "/signup",
      component: import("../modules/SignUpview/SignUpView.vue"),
      name: "SignUp",
    },
    {
      path: "/signin",
      component: import("../modules/SignInview/SignInView.vue"),
      name: "SignIn",
    },
    {
      path: "/wishlist",
      component: import("../modules/WishListview/WishListView.vue"),
      name: "WishList",
    },
    {
      path: "/cart",
      component: import("../modules/Cartview/CartView.vue"),
      name: "Cart",
    },
  ],
  // scrollBehavior() {
  //   return {
  //     top: 0,
  //   };
  // },
});

export default router;

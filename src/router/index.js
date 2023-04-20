import { createRouter, createWebHistory } from "vue-router";
import Home from "../modules/Homeview/HomeView.vue";
import Admin from "../modules/Adminview/AdminView.vue";
import AddCategory from "../modules/AddCategoryview/AddCategoryView.vue";
import EditCategory from "../modules/EditCategoryview/EditCategoryView.vue";
import Category from "../modules/Categoryview/CategoryView.vue";
import Product from "../modules/Productview/ProductView.vue";
import AddProduct from "../modules/AddProductview/AddProductView.vue";
import EditProduct from "../modules/EditProductview/EditProductView.vue";
import ShowDetails from "../modules/ShowDetailsview/ShowDetailsView.vue";
import ListProducts from "../modules/ListProductsview/ListProductsView.vue";
import WishList from "../modules/WishListview/WishListView.vue";
import SignUp from "../modules/SignUpview/SignUpView.vue";
import SignIn from "../modules/SignInview/SignInView.vue";
import Cart from "../modules/Cartview/CartView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/admin",
      component: Admin,
      name: "Admin",
    },
    {
      path: "/admin/category/add",
      component: AddCategory,
      name: "AddCategory",
    },
    { path: "/admin/category", component: Category, name: "Category" },
    {
      path: "/admin/product",
      component: Product,
      name: "Product",
    },
    {
      path: "/admin/product/add",
      component: AddProduct,
      name: "AddProduct",
    },
    {
      path: "/admin/category/:id",
      component: EditCategory,
      name: "EditCategory",
    },
    {
      path: "/admin/product/:id",
      component: EditProduct,
      name: "EditProduct",
    },
    {
      path: "/product/show/:id",
      component: ShowDetails,
      name: "ShowDetails",
    },
    {
      path: "/category/show/:id",
      component: ListProducts,
      name: "ListProducts",
    },
    {
      path: "/signup",
      component: SignUp,
      name: "SignUp",
    },
    {
      path: "/signin",
      component: SignIn,
      name: "SignIn",
    },
    {
      path: "/wishlist",
      component: WishList,
      name: "WishList",
    },
    {
      path: "/cart",
      component: Cart,
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

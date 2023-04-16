import { createRouter, createWebHistory } from "vue-router";
import Home from "../modules/Homeview/HomeView.vue";
import Admin from "../modules/Adminview/AdminView.vue";
import AddCategory from "../views/category/AddCategory.vue";
import EditCategory from "../views/category/EditCategory.vue";
import Category from "../views/category/Category.vue";
import Product from "../views/product/Product.vue";
import AddProduct from "../views/product/AddProduct.vue";
import EditProduct from "../views/product/EditProduct.vue";
import ShowDetails from "../modules/ShowDetailsview/ShowDetailsView.vue";
import ListProducts from "../views/category/ListProducts.vue";
import WishList from "../modules/WishListview/WishListView.vue";
import SignUp from "../modules/SignUpview/SignUpView.vue";
import SignIn from "../views/SignIn.vue";
import Cart from "../views/product/Cart.vue";

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

<script setup>
import { storeToRefs } from "pinia";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useProductStore } from "../store/product.store";
import { useWishlistStore } from "../../wish-list";
import { useCartStore } from "../../cart/store/cart.store";

const productStore = useProductStore();
const { product, productLoading } = storeToRefs(productStore);

const cartStore = useCartStore();
const { cartLoading } = storeToRefs(cartStore);
const { appendToCart } = cartStore;
const quantity = ref(1);

const wishlistStore = useWishlistStore();

const route = useRoute();
const { id } = route.params;

const addToCart = async () => {
  await appendToCart({
    productId: id,
    quantity: quantity.value,
  });
};
</script>

<template>
  <Toast position="bottom-right" />
  <ProgressSpinner class="spinner-wrap" v-if="productLoading" />
  <div class="container" v-else>
    <div class="show-image-wrap">
      <img :src="product?.imageURL" />
    </div>
    <div class="show-information-wrap">
      <h4>{{ product?.name }}</h4>
      <h6>{{ product?.categoryName }}</h6>
      <h5>{{ product?.price }}$</h5>
      <p>{{ product?.description }}</p>
      <div class="add-to-cart-wrap">
        <div class="add-to-cart-quantity">
          <span class="quantity-span">Quantity</span>
          <InputText type="number" v-model="quantity" class="quantity" />
        </div>
        <Button
          type="button"
          label="Add to cart"
          :loading="cartLoading"
          class="add-to-cart-btn"
          @click="addToCart()"
        />
      </div>
      <div class="features">
        <h5>Features</h5>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et!
          </li>
        </ul>
      </div>
      <Button
        class="wishlist-button"
        @click="wishlistStore.addProductToWishlist()"
        type="button"
        label="Add to wishlist"
        :loading="wishlistStore.wishlistLoading"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 50px 100px;
  display: flex;
  justify-content: center;
}
.show-information-wrap {
  margin-left: 40px;
}
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.show-image-wrap img {
  width: 600px;
}
h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
h5 {
  font-size: 18px;
  margin-bottom: 10px;
}
h6 {
  font-size: 17px;
  margin-bottom: 10px;
}
p {
  font-size: 14px;
  margin-bottom: 20px;
}
.add-to-cart-wrap {
  display: flex;
  justify-content: space-between;
}
.add-to-cart-quantity {
  display: flex;
  align-items: center;
}
.add-to-cart-quantity input {
  width: 50px;
  height: 100%;
}
.quantity-span {
  background-color: rgb(255, 175, 69);
  padding: 15px 8px;
  border-radius: 5%;
}
.add-to-cart-btn {
  border: none;
  background-color: var(--red-500);
}
.add-to-cart-btn:hover {
  background-color: var(--red-600);
}
li {
  margin-bottom: 10px;
}
.features {
  margin-top: 20px;
}
.wishlist-button {
  padding: 12px 10px;
  cursor: pointer;
}
</style>

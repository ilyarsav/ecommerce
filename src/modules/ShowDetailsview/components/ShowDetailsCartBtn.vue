<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useCartStore } from "../../../stores/cart";

const { cartItems, isAdded } = storeToRefs(useCartStore());
const { appendToCart } = useCartStore();
const props = defineProps(["token", "id"]);
const emits = defineEmits(["show"]);
const quantity = ref(1);

const productAdded = {
  severity: "success",
  summary: "success",
  detail: "Product added to cart",
  life: 3000,
};
const productWasAdded = {
  severity: "info",
  summary: "info",
  detail: "You added this product to cart earlier",
  life: 3000,
};
const notifyText = {
  severity: "info",
  summary: "info",
  detail: "please log in to add item to cart",
  life: 3000,
};

const addToCart = async () => {
  if (!props.token) {
    emits("show", notifyText);
    return;
  }

  const addObject = {
    productId: props.id,
    quantity: quantity.value,
  };

  if (!cartItems.value.some((elem) => elem.product.id == addObject.productId)) {
    await appendToCart(addObject, props.token).then(() => {
      if (isAdded.value) {
        emits("show", productAdded);
      }
    });
  } else {
    emits("show", productWasAdded);
  }
};
</script>

<template>
  <div class="add-to-cart-wrap">
    <div class="add-to-cart-quantity">
      <div class="quantity-wrap">
        <span>Quantity</span>
      </div>
      <input type="number" v-model="quantity" />
    </div>
    <button class="add-to-cart-btn" @click="addToCart()">Add to cart</button>
  </div>
</template>

<style scoped>
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
.quantity-wrap {
  padding: 10px;
  background-color: rgb(255, 175, 69);
}
.add-to-cart-btn {
  padding: 10px;
  border: none;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
}
</style>

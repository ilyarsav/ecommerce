<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useCartStore } from "../../../stores/cart";

const { cartItems, isAdded } = storeToRefs(useCartStore());
const { addCartItem } = useCartStore();
const props = defineProps(["token", "id"]);
const emits = defineEmits(["switchModal", "changeModalText"]);
const quantity = ref(1);

const productAdded = "Product added to cart";
const productWasAdded = "You added this product to cart earlier";
const notifyText = "please log in to add item to cart";

const addToCart = () => {
  if (!props.token) {
    emits("changeModalText", notifyText);
    emits("switchModal", true);
    return;
  }

  const addObject = {
    productId: props.id,
    quantity: quantity.value,
  };

  if (!cartItems.value.some((elem) => elem.product.id == addObject.productId)) {
    addCartItem(addObject, props.token).then(() => {
      if (isAdded.value) {
        emits("changeModalText", productAdded);
        emits("switchModal", true);
      }
    });
  } else {
    emits("changeModalText", productWasAdded);
    emits("switchModal", true);
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

<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useCartStore } from "../../stores/cart";

const token = ref("");
const cartStore = useCartStore();
const { cartItems, totalCost } = storeToRefs(cartStore);
const { fetchCartData, deleteCartItem } = cartStore;

const listCartItems = async () => {
  await fetchCartData(token.value);
};

const deleteItem = async (itemId) => {
  await deleteCartItem(itemId, token.value);
};

onMounted(() => {
  token.value = localStorage.getItem("token");
  listCartItems();
});
<<<<<<< HEAD

=======
>>>>>>> 389fd63cd3e89cdd4f2b6b3f11aa801a8c37e40d
</script>

<template>
  <div class="container">
    <h3 v-if="!token">You need to sign In</h3>

    <div class="content-wrap" v-else>
      <div class="header">
        <h4>Shopping Cart</h4>
      </div>
      <div class="content">
        <div
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          class="content-item"
        >
          <div class="image-wrap">
            <img :src="cartItem.product.imageURL" class="image" />
          </div>

          <div class="information">
            <p class="information-item itemName">
              <router-link
                class="link"
                :to="{
                  name: 'ShowDetails',
                  params: { id: cartItem.product.id },
                }"
                >{{ cartItem.product.name }}</router-link
              >
            </p>
            <div class="cost-quantity">
              <p class="information-item">Quantity: {{ cartItem.quantity }}</p>
              <p class="information-item">
                Cost: ${{ cartItem.product.price }} per unit
              </p>
            </div>
            <p class="information-item">
              Total:
              <span>
                <b>${{ cartItem.product.price * cartItem.quantity }}</b>
              </span>
            </p>
            <a href="#" class="removeBtn" @click="deleteItem(cartItem.id)">
              Remove from cart
            </a>
          </div>
        </div>
        <div class="total-cost">
          <b>Total: ${{ totalCost }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin-bottom: 20px;
}
.header h4 {
  font-size: 22px;
}
.content {
  max-width: 700px;
}
.content-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgb(143, 143, 143);
}
.image {
  width: 80%;
}
.information {
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.information-item {
  margin: 10px;
}
.cost-quantity {
  display: flex;
  justify-content: space-around;
}
.total-cost {
  margin-top: 20px;
  margin-left: 600px;
  font-size: 22px;
}
.link {
  text-decoration: none;
  color: rgb(4, 17, 192);
}
.removeBtn {
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  color: brown;
  font-weight: 700;
}
.itemName {
  font-weight: 700;
}
</style>

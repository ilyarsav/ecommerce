<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../../stores/cart";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
import { useWishlistStore } from "../../stores/wishlist";

const cartStore = useCartStore();
const { cartItems, isAdded } = storeToRefs(cartStore);
const { addCartItem } = cartStore;

const wishlistStore = useWishlistStore();
const productStore = useProductStore();
const categoryStore = useCategoryStore();

const route = useRoute();

const product = ref({});
const category = ref({});
const id = ref(null);
const token = ref("");
const isModal = ref(false);
const quantity = ref(1);
const wishlistString = ref("Add to wishlist");
const modalText = ref("please log in to add item to wishlist");

const addToWishlist = () => {
  if (!token.value) {
    isModal.value = true;
    return;
  }

  wishlistStore.addProductToWishlist(token.value, id.value).then((res) => {
    if (wishlistStore.isAddedToWishlist) {
      wishlistString.value = "Added to wishlist";
    }
  });
};

const addToCart = async () => {
  if (!token.value) {
    isModal.value = true;
    return;
  }

  const addObject = {
    productId: id.value,
    quantity: quantity.value,
  };

  if (!cartItems.value.some((elem) => elem.product.id == addObject.productId)) {
    await addCartItem(addObject, token.value).then(() => {
      if (isAdded.value) {
        modalText.value = "Product added to cart";
        isModal.value = true;
      }
    });
  } else {
    modalText.value = "You added this product to cart earlier";
    isModal.value = true;
  }
};

const closeModal = () => {
  isModal.value = false;
};

onMounted(() => {
  token.value = localStorage.getItem("token");
  id.value = route.params.id;

  product.value = productStore.products.find(
    (product) => product.id == id.value
  );

  category.value = categoryStore.categories.find(
    (category) => category.id == product.value.categoryId
  );

});
</script>

<template>
  <div class="container">
    <div class="dark-background" v-if="isModal">
      <div class="modal">
        <p>{{ modalText }}</p>
        <button class="button" @click="closeModal">OK</button>
      </div>
    </div>
    <div class="show-image-wrap">
      <img :src="product.imageURL" />
    </div>
    <div class="show-information-wrap">
      <h4>{{ product.name }}</h4>
      <h6>{{ category.categoryName }}</h6>
      <h5>{{ product.price }}$</h5>
      <p>{{ product.description }}</p>

      <div class="add-to-cart-wrap">
        <div class="add-to-cart-quantity">
          <div class="quantity-wrap">
            <span>Quantity</span>
          </div>
          <input type="number" v-model="quantity" />
        </div>
        <button class="add-to-cart-btn" @click="addToCart()">
          Add to cart
        </button>
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
      <button class="wishlist-button" @click="addToWishlist()">
        {{ wishlistString }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 50px 100px;
  display: flex;
  justify-content: center;
}
.show-image-wrap img {
  max-width: 400px;
}

.show-information-wrap {
  margin-left: 40px;
}
.show-information-wrap h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
.show-information-wrap h5 {
  font-size: 18px;
  margin-bottom: 10px;
}
.show-information-wrap h6 {
  font-size: 17px;
  margin-bottom: 10px;
}
.show-information-wrap p {
  font-size: 14px;
  margin-bottom: 20px;
}
li {
  margin-bottom: 10px;
}
.wishlist-button {
  padding: 10px;
  border: 0;
  background-color: #b4b4b4;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
.dark-background {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.button {
  border: none;
  padding: 15px 180px;
  background-color: rgb(192, 4, 4);
  color: white;
  cursor: pointer;
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

.features {
  margin-top: 20px;
}
</style>

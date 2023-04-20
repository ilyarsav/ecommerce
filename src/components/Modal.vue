<script setup>
const props = defineProps(["isModal", "modalText"]);
const emits = defineEmits(["switchModal"]);

const closeModal = () => {
  emits("switchModal", false);
};
</script>

<template>
  <div class="dark-background" v-if="props.isModal">
    <div class="modal">
      <p>{{ props.modalText ? props.modalText : "write a text" }}</p>
      <button class="button" @click="closeModal">OK</button>
    </div>
  </div>
</template>

<style scoped>
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
</style>

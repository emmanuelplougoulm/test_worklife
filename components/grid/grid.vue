<template>
  <ModalComponent
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    name="modal"
  />
  <!-- <template #header>Custom header</template>
    <template #content>Custom content</template>
    <template #footer>Custom content</template> -->
  <!-- </ModalComponent> -->
  <div class="grid-container">
    <div class="grid-item" @click="openModal">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</template>

<script setup lang="ts">
// modal related
import { ref } from "vue";
import ModalComponent from "../modal/modal.vue";

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

// const submitHandler = ()=>{
// }
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  border: 1px green solid;
  flex: 1;
  margin: 20px 0;
}

.grid-item {
  flex: 1 0 25%;
  box-sizing: border-box;
  border: 1px red solid;
}

@media screen and (max-width: 768px) {
  .grid-item {
    flex: 1 0 33.33%;
  }
}

@media screen and (max-width: 480px) {
  .grid-item {
    flex: 1 0 50%;
  }
}
</style>

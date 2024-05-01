<template>
  <ModalComponent
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    name="modal"
  />
  <div class="grid-container">
    <div
      v-for="artwork in artworks"
      @click="() => openModal(artwork.id)"
      :key="artwork.id"
      class="grid-item"
    >
      {{ artwork.id }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/stores/store";
import ModalComponent from "../modal/modal.vue";

const store = useStore();
const { setCurrentArtwork } = store;

const { artworks } = toRefs(store);

const isModalOpened = ref(false);

const openModal = (id: string) => {
  isModalOpened.value = true;

  setCurrentArtwork(id);
};
const closeModal = () => {
  isModalOpened.value = false;
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  border: 1px green solid;
  flex: 1;
  margin: 20px 0;
  min-width: 150px;
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

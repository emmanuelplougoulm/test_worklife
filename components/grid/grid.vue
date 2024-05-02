<template>
  <ModalComponent
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    name="modal"
  />
  <div class="grid-container">
    <GridItem
      v-if="artworks.length > 0"
      class="grid-item"
      v-for="artwork in artworks"
      @click="() => openModal(artwork.id)"
      :key="artwork.id"
      :image-url="artwork.webImage.url"
      :title="artwork.title"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/stores/store";
import ModalComponent from "../modal/modal.vue";
import GridItem from "@/components/grid-item/grid-item.vue";

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
  border: 2px green solid;
  flex: 1;
  margin: 20px 0;
  min-width: 150px;
}

.grid-item {
  flex: 1 0 25%;
  box-sizing: border-box;
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

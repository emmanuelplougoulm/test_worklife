<script setup>
import { useStore } from "@/stores/store";
import Button from "@/components/button/button.vue";

const store = useStore();

const currentArtwork = store.currentArtwork;

// const img_url = currentArtwork.webImage.url
//   ? store.currentArtwork.webImage.url
//   : "";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <div @click.stop="emit('modal-close')" class="header">X</div>
        </div>
        <div class="modal-body">
          <div class="image image-tile">
            <img :src="img_url" class="image" />
          </div>
          <div class="infos">
            <div class="title">{{ currentArtwork.title }}</div>
            <div>Description</div>
          </div>
        </div>
        <div class="modal-footer">
          <Button :text="'Add to favorites'" />
          <Button
            :text="'View details'"
            @click="navigateTo(`details/${currentArtwork.id}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}

.modal-body {
  flex: 1;
  display: flex;
}

.modal-body .image {
  flex: 1;
}

.modal-body .infos {
  padding-left: 3.125rem;
  flex: 2;
}

.modal-body .infos .title {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
}

.modal-footer {
  min-height: 3.75rem;
  display: flex;
}

.button {
  flex: 1;
  border: 0.0625rem black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-wrapper {
  flex: 1;
}
.modal-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 31.25rem;
  margin: 9.375rem auto;
  padding: 1.25rem 1.875rem;
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.33);
}

.image-tile {
  position: relative;
  overflow: hidden;
  width: 6.25rem;
  height: 6.25rem;
}

.image-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .modal-mask {
    align-items: flex-end;
  }

  .modal-footer {
    flex-direction: column;
  }
}

@media screen and (max-width: 480px) {
  .modal-body {
    flex-direction: column;
  }
}
</style>


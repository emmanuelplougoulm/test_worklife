<script setup>
import { useStore } from "@/stores/store";
import ModalComponent from "../modal/modal.vue";

const store = useStore();
const id = store.currentArtwork.id;
const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <div @click.stop="emit('modal-close')" class="header">X</div>
        </div>
        <div class="modal-body">
          <div class="image">button1</div>
          <div class="infos">button2</div>
        </div>
        <div class="modal-footer">
          <div class="button">button1</div>
          <div class="button" @click="navigateTo(`details/${id}`)">button2</div>
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
  border: 1px red solid;
  flex: 1;
  display: flex;
}

.modal-body .image {
  border: 1px violet solid;
  flex: 1;
}
.modal-body .infos {
  border: 1px violet solid;
  flex: 2;
}
.modal-footer {
  border: 1px green solid;
  min-height: 60px;
  display: flex;
  justify-content: space-around;
}
.button {
  flex: 1;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 500px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
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

<template>
  <div class="container">
    <div>
      <Button @click="navigateTo(`/`)" :text="'Back'" />
    </div>
    <div class="details-container">
      <div class="image image-tile">
        <!-- <img :src="img_url" class="image" /> -->
      </div>
      <div class="infos">
        <div class="title">{{ currentArtwork.title }}</div>
        <div class="">description</div>
        <div class="">category</div>
        <div class="tags">
          <div class="tag">Tag 1</div>
          <div class="tag">Tag 2</div>
          <div class="tag">Tag 3</div>
          <div class="tag">Tag 4</div>
        </div>
      </div>
    </div>
    <div class="favorites-container">
      <div class="empty"></div>
      <div class="btn-container">
        <Button @click="addToFavorites" :text="'AddToFavorites'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
import Button from "@/components/button/button.vue";

const store = useStore();

const currentArtwork: any = store.currentArtwork;

// const img_url = currentArtwork.webImage.url ? currentArtwork.webImage.url : "";

const addToFavorites = () => {
  console.log("add to favorites");
};
</script>

<style>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 60px;
  background-color: #ffffff;
  border-radius: 8px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.details-container {
  display: flex;
  min-height: 300px;
}

.favorites-container {
  display: flex;
}
.favorites-container .empty {
  flex: 1;
}
.favorites-container .btn-container {
  flex: 2;
}

.details-container .image {
  flex: 1;
  border: 1px black solid;
}

.details-container .infos {
  flex: 2;
  border: 1px black solid;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tags .tag {
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px black solid;
  flex-basis: 25%;
  padding: 4px;
}

.tag:hover {
  background-color: pink;
}

.image-tile {
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
}

.image-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.infos .title {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  flex: 2;
}

@media screen and (max-width: 768px) {
  .favorites-container .empty {
    display: none;
  }

  .favorites-container .btn-container button {
    width: 100%;
  }

  .modal-body {
    flex: 1;
  }
}

@media screen and (max-width: 480px) {
  .modal-body {
    flex-direction: column;
    /* flex:0; */
  }
}
</style>

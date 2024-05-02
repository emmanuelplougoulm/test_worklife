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
  gap: 1.25rem;
  padding: 1.875rem 3.75rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
}

.button-container {
  display: flex;
  justify-content: center;
}

.details-container {
  display: flex;
  min-height: 18.75rem;
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
  border: 0.0625rem black solid;
}

.details-container .infos {
  flex: 2;
  border: 0.0625rem black solid;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
}

.tags .tag {
  background-color: #ffffff;
  border-radius: 0.25rem;
  border: 0.0625rem black solid;
  flex-basis: 25%;
  padding: 0.25rem;
}

.tag:hover {
  background-color: pink;
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

.infos .title {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  flex: 2;
}

@media screen and (max-width: 48rem) {
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

@media screen and (max-width: 30rem) {
  .modal-body {
    flex-direction: column;
    /* flex:0; */
  }
}
</style>

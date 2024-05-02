<template>
  <div
    class="image-tile"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="imageUrl" :alt="title" class="image" />
    <div v-if="isHovered" class="title">{{ title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: String,
  title: String,
});

const isHovered = ref(false);
</script>

<style scoped>
.image-tile {
  position: relative;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  object-fit: cover;
}

.title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.625rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: background-color 0.3s ease;
  transform: translateY(100%);
}

.image-tile:hover .title {
  transform: translateY(0);
}
</style>

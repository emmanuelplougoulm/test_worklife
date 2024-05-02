<template>
  <div class="searchbar-container">
    <TextInput v-model="currentSearch" />
    <Button @click="handleSubmit" :text="'Search'" />
  </div>
</template>

<script setup lang="ts">
import TextInput from "../text-input/text-input.vue";

import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { currentSearch } = storeToRefs(store);
const { fetchImages } = store;

async function handleSubmit() {
  fetchImages(currentSearch);
}

onMounted(async () => {
  fetchImages(currentSearch);
});
</script>

<style scoped>
.searchbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-height: 3rem;
  min-width: 150px;
}

input {
  flex: 7;
  padding: 6px;
  border-radius: 4px;
  border: 2px black solid;
  color: #000000;
  min-width: 50px;
}

input:focus {
  outline: none;
}

button {
  flex: 1;
}
</style>

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
  gap: 0.625rem;
  min-height: 3rem;
  min-width: 9.375rem;
}

input {
  flex: 7;
  padding: 0.375rem;
  border-radius: 0.25rem;
  border: 0.125rem black solid;
  color: #000000;
  min-width: 3.125rem;
}

input:focus {
  outline: none;
}

button {
  flex: 1;
  margin: 0.25rem;
}
</style>

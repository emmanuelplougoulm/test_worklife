<template>
  <div class="searchbar-container">
    <TextInput v-model="currentSearch" />
    <div @click="handleSubmit">submit</div>
  </div>
</template>

<script setup lang="ts">
import httpClient from "../../services/httpClient/httpClient";
import TextInput from "../text-input/text-input.vue";

import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { currentSearch, searchResults } = storeToRefs(store);

async function handleSubmit() {
  try {
    const response = await httpClient.get(currentSearch.value.value);

    if (response.count > 0) {
      searchResults.value = { ...response };
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.searchbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px blue solid;
  min-height: 3.75rem;
}

input {
  flex: 1;
}

.searchbar-container div {
  margin-left: 30px;
  border: 1px red solid;
}
</style>

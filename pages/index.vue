<template>
  <div class="content-container">
    <SearchBar />
    <Grid />
    <div class="button-container"><Button /></div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "../components/searchbar/searchbar.vue";
import Grid from "../components/grid/grid.vue";
import Button from "../components/button/button.vue";

import httpClient from "../services/httpClient/httpClient";

async function fetchData() {
  try {
    const response = await httpClient.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}

const result = await fetchData();
console.log("result", result);
</script>

<style>
.content-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 60px;
  background-color: aqua;
  border: 2px solid red;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>

<!-- apiKey: RujdMKAf -->

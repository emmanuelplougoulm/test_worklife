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

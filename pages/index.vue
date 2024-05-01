<template>
  <div class="content-container">
    <SearchBar />
    <Grid />
    <div class="button-container"><Button :text="'Load more'"/></div>
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
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 60px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 2px;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>

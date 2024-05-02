<template>
  <div class="content-container">
    <SearchBar />
    <Grid />
    <div class="button-container"><Button :text="'Load more'" /></div>
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
  padding: 1.875rem 3.75rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  margin: 0.125rem;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>

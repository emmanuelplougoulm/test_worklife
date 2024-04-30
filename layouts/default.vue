<script setup lang="ts">
import Header from "../components/header/header.vue";
</script>

<template>
  <div class="layout-container">
    <Header />
    <slot />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

body {
  border: 2px green solid;
}

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border: 5px black solid;
}
</style>

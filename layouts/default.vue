<script setup lang="ts">
import "@/styles/globals.css";
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
  background-color: #000000;
}

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

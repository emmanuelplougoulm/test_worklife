<script setup lang="ts">
import Header from "../components/header/header.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <div class="layout-content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.layout {
}
</style>

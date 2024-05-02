<template>
  <button class="button">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<style scoped>
button {
  background: none;
  border: none;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;

  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 0.125rem black solid;
  color: #000000;
}

button:focus {
  outline: none;
}

button:hover {
  background-color: lightblue;
}
</style>

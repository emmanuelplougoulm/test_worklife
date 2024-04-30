<template>
  <div class="searchbar-container">
    <input></input>
    <div>button</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.searchbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px blue solid;
  min-height: 3.75rem;
}

input {
  flex:1;
}

.searchbar-container div {
  margin-left: 30px;
  border:1px red solid;
}

</style>

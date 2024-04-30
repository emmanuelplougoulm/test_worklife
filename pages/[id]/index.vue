<template>
  <div class="container">
    <div><button>I am the back button</button></div>
    <div class="modal-body">
      <div class="image">image</div>
      <div class="infos">
        <div class="">title</div>
        <div class="">description</div>
        <div class="">category</div>
        <div class="tags">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
    <div class="favorites-container">
      <div class="empty"></div>
      <div class="btn-container">
        <button>I am the favourites button</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 60px;
  background-color: greenyellow;
  border: 2px solid red;
}

.button-container {
  display: flex;
  justify-content: center;
}

.modal-body {
  border: 1px red solid;
  display: flex;
  min-height: 300px;
}

.favorites-container {
  display: flex;
}
.favorites-container .empty {
  flex: 1;
}
.favorites-container .btn-container {
  flex: 2;
}

.modal-body .image {
  flex: 1;
  border: 1px black solid;
}

.modal-body .infos {
  flex: 2;
  border: 1px black solid;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.tags div {
  border: 1px brown solid;
  flex-basis: 33%;
}

@media screen and (max-width: 768px) {
  .favorites-container .empty {
    display: none;
  }

  .favorites-container .btn-container button {
    width: 100%;
  }

  .modal-body {
    flex: 1;
  }
}

@media screen and (max-width: 480px) {
  .modal-body {
    flex-direction: column;
    /* flex:0; */
  }
}
</style>

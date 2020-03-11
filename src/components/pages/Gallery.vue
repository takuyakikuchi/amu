<template>
  <div>
    <Nav />
    <!-- Gallery grid -->
    <div id="gallery">
      <img src="../../assets/gallery_1.jpg" alt="gallery 1" class="image-item">
      <img src="../../assets/gallery_2.jpg" alt="gallery 2" class="image-item">
      <img src="../../assets/gallery_3.jpg" alt="gallery 3" class="image-item">
      <img src="../../assets/gallery_4.jpg" alt="gallery 4" class="image-item">
      <img src="../../assets/gallery_5.jpg" alt="gallery 5" class="image-item">
      <img src="../../assets/gallery_6.jpg" alt="gallery 6" class="image-item">
    </div>
    <!-- The modal -->
    <div class="modal">
      <img class="modal-content" src="../../assets/gallery_1.jpg" alt="gallery 1">
    </div>
    <ScrollDown />
  </div>
</template>

<script>
import Nav from '../modules/Nav.vue';
import ScrollDown from '../modules/ScrollDown.vue';

export default {
  name: 'Gallery',
  components: {
    Nav,
    ScrollDown
  }
}
</script>
  
<style scoped>
  #gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 10px;
  }
  .image-item {
    height: 200px;
    width: 180px;
    place-self: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 300ms;
  }
  .image-item:hover {
    opacity: 0.7;
  }
  .modal {
    /* display: none; */
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    display: flex;
  }
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    height: 60vh;
    border-radius: 5px;
  }
</style>

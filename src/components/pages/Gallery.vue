<template>
  <div>
    <Nav />
    <div class="image-section">
      <img src="../../assets/gallery_1.jpg" alt="gallery 1" class="image-item">
      <img src="../../assets/gallery_2.jpg" alt="gallery 2" class="image-item">
      <img src="../../assets/gallery_3.jpg" alt="gallery 3" class="image-item">
      <img src="../../assets/gallery_4.jpg" alt="gallery 4" class="image-item">
      <img src="../../assets/gallery_5.jpg" alt="gallery 5" class="image-item">
      <img src="../../assets/gallery_6.jpg" alt="gallery 6" class="image-item">
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
  .image-section {
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
  }
</style>

<template>
  <div class="modal" v-show="!hide">
    <Close @click.native="$emit('hideModal')"></Close>
    <img class="modal-content" src="../../assets/gallery_1.jpg" alt="gallery 1">
  </div>
</template>

<script>
  import Close from '../modules/Close.vue';

  export default {
    name: 'GalleryModal',
    components: {
      Close
    }
  }
</script>
  
<style scoped>
  .modal {
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
    height: 50vh;
    border-radius: 5px;
  }
</style>

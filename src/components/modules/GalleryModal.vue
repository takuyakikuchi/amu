<template>
  <div class="modal">
    <Close @click.native="$emit('hideModal')"></Close>
    <img class="modal-content" :src="targetSrc" />
  </div>
</template>

<script>
import Close from "../modules/Close.vue";

export default {
  props: ["image"],
  computed: {
    targetSrc() {
      return require(`../../assets/${this.image.name}.jpg`);
    }
  },
  name: "GalleryModal",
  components: {
    Close
  }
};
</script>
  
<style scoped lang="scss">
.modal {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    height: 50vh;
    border-radius: 5px;
    max-width: 415px;
  }
}
</style>

<template>
  <div class="modal">
    <Close @click.native="$emit('hideModal')"></Close>
    <div class="model">
      <div class="model-img" :style="background"></div>
      <div class="model-info">
        <p class="model-stylist">Stylist: {{image.stylist}}</p>
        <p class="model-comment">{{image.comment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Close from "../modules/Close.vue";

export default {
  props: ["image"],
  computed: {
    background() {
      return `background: url(https://res.cloudinary.com/dmxwje5he/image/upload/c_fill,h_400,q_auto:eco,w_300/${this.image.src}.jpg) no-repeat center/cover;`;
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  .model {
    width: 80%;
    max-width: 415px;
  }
  .model-img {
    width: 100%;
    height: 50vh;
    border-radius: 5px;
  }
  .model-info {
    width: 100%;
    height: 30vh;
    border-radius: 5px;
    background-color: rgba(191, 184, 160, 0.7);
    text-align: center;
    p {
      padding: 25px 0;
    }
  }
}
</style>

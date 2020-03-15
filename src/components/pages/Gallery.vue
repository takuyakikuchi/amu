<template>
  <div>
    <Nav />
    <div id="gallery-container">
      <img src="../../assets/gallery_1.jpg" alt="gallery 1" class="img-card" @click="showModal(1)" />
      <img src="../../assets/gallery_2.jpg" alt="gallery 2" class="img-card" @click="showModal(2)" />
      <img src="../../assets/gallery_3.jpg" alt="gallery 3" class="img-card" @click="showModal(3)" />
      <img src="../../assets/gallery_4.jpg" alt="gallery 4" class="img-card" @click="showModal(4)" />
      <img src="../../assets/gallery_5.jpg" alt="gallery 5" class="img-card" @click="showModal(5)" />
      <img src="../../assets/gallery_6.jpg" alt="gallery 6" class="img-card" @click="showModal(6)" />
    </div>
    <GalleryModal @hideModal="modalShow = false" v-show="modalShow" :id="id" />
    <ScrollDown />
  </div>
</template>

<script>
import Nav from "../modules/Nav.vue";
import ScrollDown from "../modules/ScrollDown.vue";
import GalleryModal from "../modules/GalleryModal.vue";

export default {
  name: "Gallery",
  components: {
    Nav,
    ScrollDown,
    GalleryModal
  },
  data() {
    return {
      modalShow: false,
      id: 1
    };
  },
  methods: {
    showModal(id) {
      this.id = id;
      this.modalShow = true;
    }
  },
  created() {
    this.$on((this.modalShow = false));
  }
};
</script>
  
<style scoped lang="scss">
#gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  .img-card {
    width: 100%;
    height: 33vh;
    place-self: center;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>

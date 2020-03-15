<template>
  <div>
    <Nav />
    <div class="responsive-container">
      <div id="gallery-container">
        <img
          src="../../assets/gallery_1.jpg"
          alt="gallery 1"
          class="img-card"
          @click="showModal(1)"
        />
        <img
          src="../../assets/gallery_2.jpg"
          alt="gallery 2"
          class="img-card"
          @click="showModal(2)"
        />
        <img
          src="../../assets/gallery_3.jpg"
          alt="gallery 3"
          class="img-card"
          @click="showModal(3)"
        />
        <img
          src="../../assets/gallery_4.jpg"
          alt="gallery 4"
          class="img-card"
          @click="showModal(4)"
        />
        <img
          src="../../assets/gallery_5.jpg"
          alt="gallery 5"
          class="img-card"
          @click="showModal(5)"
        />
        <img
          src="../../assets/gallery_6.jpg"
          alt="gallery 6"
          class="img-card"
          @click="showModal(6)"
        />
      </div>
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
.responsive-container {
  align-content: center;
}
#gallery-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5px;
}
.img-card {
  width: 160px;
  max-width: 100%;
  height: 180px;
  place-self: center;
  border-radius: 5px;
  cursor: pointer;
}
.img-card:hover {
  opacity: 0.7;
}
@media (min-width: 500px) {
  #gallery-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .img-card {
    width: 240px;
    height: 260px;
  }
}
@media (min-width: 1000px) {
  #gallery-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>

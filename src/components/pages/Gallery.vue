<template>
  <div>
    <Nav @showBooking="$emit('showBooking')" />
    <div id="gallery-container">
      <img
        v-for="image in images"
        :key="image.name"
        :src="image.src"
        :alt="image.alt"
        class="img-card"
        @click="showModal"
      />
    </div>
    <GalleryModal @hideModal="modalShow = false" v-show="modalShow" :image="selectedImage" />
    <ScrollDown @scrollDown="$emit('scrollDown')" />
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
      selectedImage: {},
      images: [
        {
          name: "gallery_1",
          src: require("../../assets/gallery_1.jpg"),
          alt: "gallery_1",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_2",
          src: require("../../assets/gallery_2.jpg"),
          alt: "gallery_2",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_3",
          src: require("../../assets/gallery_3.jpg"),
          alt: "gallery_3",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_4",
          src: require("../../assets/gallery_4.jpg"),
          alt: "gallery_4",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_5",
          src: require("../../assets/gallery_5.jpg"),
          alt: "gallery_5",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_6",
          src: require("../../assets/gallery_6.jpg"),
          alt: "gallery_6",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_7",
          src: require("../../assets/gallery_7.jpg"),
          alt: "gallery_7",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_8",
          src: require("../../assets/gallery_8.jpg"),
          alt: "gallery_8",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_9",
          src: require("../../assets/gallery_9.jpg"),
          alt: "gallery_9",
          stylist: "Tom",
          comment: "Permed beautifully."
        }
      ]
    };
  },
  methods: {
    showModal(event) {
      this.selectedImage = this.images.filter(image => {
        return image.alt === event.target.alt;
      })[0];
      this.modalShow = true;
    }
  },
  created() {
    this.selectedImage = this.images[0];
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
    opacity: 0.8;
    width: 100%;
    height: 33vh;
    place-self: center;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>

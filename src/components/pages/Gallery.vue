<template>
  <div>
    <Nav @showBooking="$emit('showBooking')" />
    <div id="gallery-container">
      <div v-for="image in images" :key="image.name" class="img-card" @click="showModal">
        <cld-image :publicId="image.src" :alt="image.alt">
          <cld-transformation
            width="200"
            height="300"
            gravity="face"
            crop="fill"
            quality="auto"
            fetchFormat="auto"
          />
        </cld-image>
      </div>
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
          src: "amu/gallery_1",
          alt: "gallery_1",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_2",
          src: "amu/gallery_2",
          alt: "gallery_2",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_3",
          src: "amu/gallery_3",
          alt: "gallery_3",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_4",
          src: "amu/gallery_4",
          alt: "gallery_4",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_5",
          src: "amu/gallery_5",
          alt: "gallery_5",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_6",
          src: "amu/gallery_6",
          alt: "gallery_6",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_7",
          src: "amu/gallery_7",
          alt: "gallery_7",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_8",
          src: "amu/gallery_8",
          alt: "gallery_8",
          stylist: "Tom",
          comment: "Permed beautifully."
        },
        {
          name: "gallery_9",
          src: "amu/gallery_9",
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
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  // grid-column-gap: 5px;
  // grid-row-gap: 5px;
  overflow-y: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  .img-card {
    cursor: pointer;
    margin: 5px;
  }
}
</style>

<template>
  <div class="modal">
    <Close @click.native="$emit('hideModal')"></Close>
    <div class="staff-card">
      <div class="staff-img">
        <img :src="targetSrc" />
      </div>
      <div class="staff-profile">
        <p>name: Tom</p>
        <p>position: Owner</p>
        <p>hobbies: Photo</p>
        <p>Comment: Be happy!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Close from "../modules/Close.vue";

export default {
  props: ["id"],
  computed: {
    targetSrc() {
      return require(`../../assets/staff_${parseInt(this.id)}.jpg`);
    }
  },
  name: "StaffModal",
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
  .staff-card {
    margin: auto;
    display: block;
    width: 90%;
    height: 80vh;
    border-radius: 5px;
    max-width: 415px;
    background-color: #bfb8a0;
  }
  .staff-img {
    text-align: center;
    padding: 20px;
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
  }
  .staff-profile {
    text-align: center;
    p {
      margin: 5px 0;
    }
  }
}
</style>

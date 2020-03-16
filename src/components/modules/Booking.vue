<template>
  <div class="modal">
    <Close @click.native="$emit('hideBooking')" />
    <div class="modal-content">
      <p>
        <i class="fas fa-phone"></i> xxx-xxxx-xxxx
      </p>
      <p>
        <i class="far fa-calendar-alt"></i>
        <a href="https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000208931">Hot peeper</a>
      </p>
      <p>
        <i class="fas fa-door-open"></i> 10:00 19:00
      </p>
    </div>
  </div>
</template>

<script>
import Close from "../modules/Close.vue";

export default {
  name: "Booking",
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
    background-color: rgba(191, 184, 160, 0.6);
    margin: auto;
    display: block;
    width: 90%;
    height: 80vh;
    border-radius: 5px;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.5rem;
      margin: 10px;
      color: white;
      i {
        margin-right: 10px;
      }
      a {
        color: white;
      }
    }
  }
}
</style>

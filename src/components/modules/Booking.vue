<template>
  <div class="modal">
    <Close @click.native="$emit('hideBooking')" />
    <div class="modal-content">
      <h1 class="booking-title">Booking from below</h1>
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  .modal-content {
    background: linear-gradient(rgba(47, 23, 15, 0.4), rgba(47, 23, 15, 0.4)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/c_scale,h_640,q_auto:eco,w_420/v1585565407/amu/booking_jinjw4.jpg")
        no-repeat center/cover;
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
    color: white;
    h1 {
      margin-bottom: 100px;
    }
    p {
      font-size: 1.5rem;
      margin: 10px;
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

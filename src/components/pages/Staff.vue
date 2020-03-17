<template>
  <div>
    <Nav @showBooking="$emit('showBooking')" />
    <div id="staff-fullpage">
      <div class="staff-banner" id="staff1">
        <p class="staff-name">Tom</p>
      </div>
      <div class="staff-banner" id="staff2">
        <p class="staff-name">Sabrina</p>
      </div>
      <div class="staff-banner" id="staff3">
        <p class="staff-name">Laura</p>
      </div>
      <div class="staff-banner" id="staff4">
        <p class="staff-name">Noah</p>
      </div>
    </div>
    <ScrollDown @scrollDown="$emit('scrollDown')" />
  </div>
</template>

<script>
import Nav from "../modules/Nav.vue";
import ScrollDown from "../modules/ScrollDown.vue";

export default {
  name: "Staff",
  components: {
    Nav,
    ScrollDown
  }
};
</script>

<style scoped lang="scss">
#staff-fullpage {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .staff-banner {
    width: 100%;
    flex-grow: 1;
    opacity: 0.9;
    display: flex;
    align-items: flex-end;
    .staff-name {
      color: rgba(255, 255, 255, 0.8);
      margin: 5px;
      font-size: 1.2rem;
    }
  }
  #staff1 {
    background: url(../../assets/staff1_bg.jpg) center/cover no-repeat;
  }
  #staff2 {
    background: url(../../assets/staff2_bg.jpg) center/cover no-repeat;
  }
  #staff3 {
    background: url(../../assets/staff3_bg.jpg) center/cover no-repeat;
  }
  #staff4 {
    background: url(../../assets/staff4_bg.jpg) center/cover no-repeat;
  }
}
@media (min-width: 992px) {
  #staff-fullpage {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    .staff-banner {
      width: 100%;
      height: 100vh;
    }
  }
}
</style>

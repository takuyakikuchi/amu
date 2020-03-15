<template>
  <div id="staff-background">
    <Nav />
    <div class="mobile-container">
      <div class="staff">
        <img class="staff-img" src="../../assets/staff_1.jpg" />
        <div class="staff-profile">
          <p class="staff-name">Tom</p>
          <p>Owner</p>
          <p>お客様に良い時間を過ごしていただけるように精一杯サービスいたします</p>
        </div>
      </div>
      <div class="staff">
        <img class="staff-img" src="../../assets/staff_2.jpg" />
        <div class="staff-profile">
          <p class="staff-name">Sabrina</p>
          <p>Chief</p>
          <p>お客様とのコミュニケーションを大事に</p>
        </div>
      </div>
      <div class="staff">
        <img class="staff-img" src="../../assets/staff_3.jpg" />
        <div class="staff-profile">
          <p class="staff-name">Sara</p>
          <p>Stylist</p>
          <p>お客様と一緒に作るヘアスタイル</p>
        </div>
      </div>
      <div class="staff">
        <img class="staff-img" src="../../assets/staff_4.jpg" />
        <div class="staff-profile">
          <p class="staff-name">Noah</p>
          <p>Stylist</p>
          <p>抜群のスタイルを</p>
        </div>
      </div>
    </div>
    <ScrollDown />
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
#staff-background {
  background-color: #bfb8a0;
  .mobile-container {
    flex-direction: column;
  }
  .staff {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 8px;
    padding: 8px;
    font-size: 0.8rem;
    .staff-img {
      width: 100px;
      height: 100px;
      background-color: black;
      border-radius: 50%;
    }
    .staff-profile {
      margin-left: 16px;
    }
    .staff-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>

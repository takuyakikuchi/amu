<template>
  <div class="background-slide">
    <Nav />
    <div class="mobile-container">
      <div id="salon-info">
        <table>
          <thead>
            <tr>
              <th colspan="2">About</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>サロン名</td>
              <td>amu</td>
            </tr>
            <tr>
              <td>代表</td>
              <td>Tom</td>
            </tr>
            <tr>
              <td>住所</td>
              <td>山梨県甲府市xxxx ビル2F</td>
            </tr>
            <tr>
              <td>TEL</td>
              <td>xxxx-xx-xxxx</td>
            </tr>
            <tr>
              <td>Open</td>
              <td>10:00 - 19:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../modules/Nav.vue";

export default {
  name: "About",
  components: {
    Nav
  }
};
</script>

<style scoped lang="scss">
.background-slide {
  width: 100%;
  height: 100vh;
  animation: background-slide 60s linear infinite;
}
@keyframes background-slide {
  0% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_1.jpg") no-repeat center/cover;
  }
  25% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_1.jpg") no-repeat center/cover;
  }
  25.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_2.jpg") no-repeat center/cover;
  }
  50% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_2.jpg") no-repeat center/cover;
  }
  50.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_3.jpg") no-repeat center/cover;
  }
  75% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_3.jpg") no-repeat center/cover;
  }
  75.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_4.jpg") no-repeat center/cover;
  }
  100% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/about_4.jpg") no-repeat center/cover;
  }
}
#salon-info {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 16px;
  border-radius: 5px;
  height: 70vh;
}
</style>

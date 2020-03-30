<template>
  <div class="background-slide">
    <Nav @showBooking="$emit('showBooking')" />
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
              <td>
                <a
                  href="https://www.google.com/maps/place/amu/@35.66123,138.5771753,17z/data=!3m1!4b1!4m5!3m4!1s0x601bf9bf527d0d73:0x99379e68d0fb53c6!8m2!3d35.66123!4d138.579364"
                  target="_blank"
                >
                  山梨県甲府市xxxx ビル2F
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </td>
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
      url("https://res.cloudinary.com/dmxwje5he/image/upload/c_fit,h_900,q_auto:eco,w_1300/v1585126221/amu/about_1.jpg")
        no-repeat center/cover;
  }
  25% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/c_fit,h_900,q_auto:eco,w_1300/v1585126221/amu/about_1.jpg")
        no-repeat center/cover;
  }
  25.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/c_fit,h_900,q_auto:eco,w_1300/v1585126219/amu/about_2.jpg")
        no-repeat center/cover;
  }
  50% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/c_fit,h_900,q_auto:eco,w_1300/v1585126219/amu/about_2.jpg")
        no-repeat center/cover;
  }
  50.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/c_fit,h_900,q_auto:eco,w_1300/v1585126231/amu/about_3.jpg")
        no-repeat center/cover;
  }
  75% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/f_auto,q_auto/v1585126231/amu/about_3.jpg")
        no-repeat center/cover;
  }
  75.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/f_auto,q_auto/amu/about_4.jpg")
        no-repeat center/cover;
  }
  100% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("https://res.cloudinary.com/dmxwje5he/image/upload/f_auto,q_auto/amu/about_4.jpg")
        no-repeat center/cover;
  }
}
#salon-info {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 16px;
  border-radius: 5px;
  height: 70vh;
  width: 100%;
  table {
    width: 100%;
    margin: 0 10px;
    th {
      padding-bottom: 30px;
    }
  }
}
</style>

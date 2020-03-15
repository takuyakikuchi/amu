<template>
  <div class="background-slide">
    <Nav />
    <HomeMessage />
    <ScrollDown />
  </div>
</template>

<script>
import HomeMessage from "../modules/HomeMessage.vue";
import Nav from "../modules/Nav.vue";
import ScrollDown from "../modules/ScrollDown.vue";

export default {
  name: "Home",
  components: {
    HomeMessage,
    Nav,
    ScrollDown
  }
};
</script>

<style scoped lang="scss">
.background-slide {
  width: 100%;
  height: 100vh;
  animation: background-slide 60s linear 6s infinite;
}
@keyframes background-slide {
  0% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_1.jpg") no-repeat center/cover;
  }
  25% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_1.jpg") no-repeat center/cover;
  }
  25.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_2.jpg") no-repeat center/cover;
  }
  50% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_2.jpg") no-repeat center/cover;
  }
  50.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_3.jpg") no-repeat center/cover;
  }
  75% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_3.jpg") no-repeat center/cover;
  }
  75.01% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_4.jpg") no-repeat center/cover;
  }
  100% {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home_4.jpg") no-repeat center/cover;
  }
}
</style>

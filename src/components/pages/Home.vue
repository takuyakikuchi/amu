<template>
  <div class="background-slide">
    <Nav v-show="!welcome" />
    <div class="home-message" v-if="welcome">
      <h1>Welcome to amu</h1>
      <p>お客様の「なりたい」を一緒に叶えます</p>
    </div>
    <div class="home-message" v-else>
      <h1>amu</h1>
    </div>
    <ScrollDown v-show="!welcome" />
  </div>
</template>

<script>
import Nav from "../modules/Nav.vue";
import ScrollDown from "../modules/ScrollDown.vue";

export default {
  name: "Home",
  components: {
    Nav,
    ScrollDown
  },
  data: function() {
    return {
      welcome: true
    };
  },
  methods: {
    switchMessage() {
      setTimeout(() => {
        this.welcome = false;
      }, 6000);
    }
  },
  beforeMount() {
    this.switchMessage();
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
.home-message {
  color: rgba(255, 255, 255, 0.8);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
  animation: welcome 5s linear;
}
@keyframes welcome {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}
</style>

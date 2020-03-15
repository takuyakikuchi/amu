<template>
  <div id="home">
    <Nav v-show="!welcome" />
    <div class="home-message" v-if="welcome">
      <h1>Welcome to amu</h1>
      <p>お客様の「なりたい」を一緒に叶えます</p>
    </div>
    <ScrollDown v-show="!welcome" @scrollDown="$emit('scrollDown')" />
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
#home {
  width: 100%;
  height: 100vh;
  animation: background-wait 5s forwards 4s;
  max-width: 500px;
  margin: auto;
  .home-message {
    color: rgba(255, 255, 255, 0.8);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
    animation: welcome 5s forwards;
  }
}
@keyframes background-wait {
  from {
    background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)),
      url("../../assets/home.gif") no-repeat center/cover;
    opacity: 0;
  }
  to {
    background: linear-gradient(rgba(83, 57, 49, 0.1), rgba(47, 23, 15, 0.8)),
      url("../../assets/home.gif") no-repeat center/cover;
    opacity: 1;
  }
}

@keyframes welcome {
  from {
    opacity: 0;
  }
  70% {
    opacity: 0.6;
  }
  to {
    opacity: 0;
  }
}
</style>

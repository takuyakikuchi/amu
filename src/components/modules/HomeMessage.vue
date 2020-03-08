<template>
  <div class="home-message" v-if="welcome">
    <h1>Welcome to amu</h1>
    <p>お客様の「なりたい」を一緒に叶えます</p>
  </div>
  <div class="home-message" v-else>
    <h1>amu</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  data: function() {
    return {
      welcome: true
    }
  },
  methods: {
    switchMessage() {
      setTimeout(() => {
        this.welcome = false;
      }, 6000)
    }
  },
  beforeMount() {
    this.switchMessage();
  }
}
</script>

<style scoped>
  .home-message {
    color: rgb(255, 255, 255, 0.8);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
    animation: welcome 5s linear;
  }
  @keyframes welcome{
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
</style>

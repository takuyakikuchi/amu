<template>
  <div id="home-slide">
    <div id="home-message">
      <h1>Welcome to amu</h1>
      <p>お客様の「なりたい」を一緒に叶えます</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* ------------ Background picuture slide ------------- */
  #home-slide {
    width: 100%;
    height: 100vh;
    animation: home-background 60s linear 6s infinite;
  }
  @keyframes home-background {
    0% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_1.jpg') no-repeat center/cover;
    }
    25% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_1.jpg') no-repeat center/cover;
    }
    25.01% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_2.jpg') no-repeat center/cover;
    }
    50% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_2.jpg') no-repeat center/cover;
    }
    50.01% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_3.jpg') no-repeat center/cover;
    }
    75% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_3.jpg') no-repeat center/cover;
    }
    75.01% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_4.jpg') no-repeat center/cover;
    }
    100% {
      background: linear-gradient(rgba(47, 23, 15, 0.6), rgba(47, 23, 15, 0.6)), url( '../../assets/home_4.jpg') no-repeat center/cover;
    }
  }
  /* ------------- Title ---------------- */
  #home-message {
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

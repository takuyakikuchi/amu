<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Home />
      </div>
      <div class="section">
        <Menu />
      </div>
      <div class="section">
        <Gallery />
      </div>
      <div class="section">
        <Staff />
      </div>
      <div class="section">
        <About />
      </div>
    </full-page>
  </div>
</template>

<script>
import Home from "./components/pages/Home.vue";
import Menu from "./components/pages/Menu.vue";
import Gallery from "./components/pages/Gallery.vue";
import Staff from "./components/pages/Staff.vue";
import About from "./components/pages/About.vue";

export default {
  name: "App",
  components: {
    Home,
    Menu,
    Gallery,
    Staff,
    About
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100vh;
  background-color: #000;
}
.mobile-container {
  width: 350px;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div id="menu-background">
    <Nav />
    <div class="mobile-container">
      <p>About amu</p>
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

<style scoped>
#menu-background {
  width: 100%;
  height: 100vh;
  background-color: #bfb8a0;
}
</style>

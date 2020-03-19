<template>
  <div>
    <i class="fas fa-bars" @click="show = !show"></i>
    <div class="menu" v-show="show">
      <ul>
        <li>
          <a href="#home" id="nav-home">amu</a>
        </li>
        <li>
          <a href="#menu" id="nav-menu">menu</a>
        </li>
        <li>
          <a href="#gallery" id="nav-gallery">gallery</a>
        </li>
        <li>
          <a href="#staff" id="nav-staff">staff</a>
        </li>
        <li>
          <a href="#about" id="nav-about">about</a>
        </li>
        <li @click="$emit('showBooking')">booking</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {
      show: false
    };
  }
};
</script>

<style scoped lang="scss">
i {
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
}
.menu {
  width: 50%;
  max-width: 300px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  ul {
    width: 100%;
    text-align: center;
    list-style: none;
    li {
      font-size: 1.2rem;
      margin: 15px 0;
      &:hover {
        font-size: 1.3rem;
      }
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      &:visited {
        text-decoration: none;
      }
    }
  }
}
</style>

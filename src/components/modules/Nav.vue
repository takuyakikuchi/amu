<template>
  <div>
    <i class="fas fa-bars" @click="show = !show"></i>
    <div class="menu-mobile" v-if="show">
      <ul>
        <li>
          <a href="#page1">amu</a>
        </li>
        <li>
          <a href="#page2">menu</a>
        </li>
        <li>
          <a href="#page3">gallery</a>
        </li>
        <li>
          <a href="#page4">staff</a>
        </li>
        <li>
          <a href="#page5">about</a>
        </li>
        <li>booking</li>
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
.menu-mobile {
  width: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  ul {
    width: 100%;
    text-align: center;
    list-style: none;
  }
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
</style>

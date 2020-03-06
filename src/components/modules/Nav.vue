<template>
  <div>
    <i class="fas fa-bars" @click="show = !show"></i>
    <div class="menu-mobile" v-if="show">
      <ul>
        <li>amu</li>
        <li>menu</li>
        <li>gallery</li>
        <li>staff</li>
        <li>booking</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Nav',
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  i {
    color: rgba(255,255,255,0.8);
    font-size: 2rem;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
  }
  .menu-mobile {
    width: 50%;
    height: 100vh;
    background-color: rgba(255,255,255,0.3);
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .menu-mobile ul {
    text-align: center;
    list-style: none;
  }
</style>

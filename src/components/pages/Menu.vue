<template>
  <div id="menu-background">
    <Nav />
    <div class="mobile-container">
      <table>
        <thead>
          <tr>
            <th colspan="2">Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cut</td>
            <td>￥4,320(税込)</td>
          </tr>
          <tr>
            <td>Cut</td>
            <td>￥4,320(税込)</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>￥6,480(税込)</td>
          </tr>
          <tr>
            <td>Perm</td>
            <td>￥6,480(税込)</td>
          </tr>
          <tr>
            <td>Head spa</td>
            <td>￥6,480(税込)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ScrollDown />
  </div>
</template>

<script>
import Nav from "../modules/Nav.vue";
import ScrollDown from "../modules/ScrollDown.vue";

export default {
  name: "Menu",
  components: {
    Nav,
    ScrollDown
  }
};
</script>

<style scoped lang="scss">
#menu-background {
  width: 100%;
  height: 100vh;
  background-color: #bfb8a0;
}
table {
  margin: auto;
}
</style>

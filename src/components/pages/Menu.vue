<template>
  <div id="menu-background">
    <Nav @showBooking="$emit('showBooking')" />
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
      <a href="https://beauty.hotpepper.jp/slnH000208931/coupon/" class="menu-detail-link">
        <i class="fas fa-external-link-alt"></i> Menu detail
      </a>
    </div>
    <ScrollDown @scrollDown="$emit('scrollDown')" />
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
  background-color: #bfb8a0;
  table {
    th {
      padding-bottom: 10px;
    }
  }
  .menu-detail-link {
    margin-top: 32px;
    font-size: 0.7em;
    color: black;
    text-decoration: underline;
  }
}
</style>

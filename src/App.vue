<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Home @scrollDown="scrollDown" @showBooking="bookingShow=true" />
      </div>
      <div class="section">
        <Menu @scrollDown="scrollDown" @showBooking="bookingShow=true" />
      </div>
      <div class="section">
        <Gallery @scrollDown="scrollDown" @showBooking="bookingShow=true" />
      </div>
      <div class="section">
        <Staff @scrollDown="scrollDown" @showBooking="bookingShow=true" />
      </div>
      <div class="section">
        <About @showBooking="bookingShow=true" />
      </div>
    </full-page>
    <Booking @hideBooking="bookingShow=false" v-show="bookingShow" />
  </div>
</template>

<script>
import Home from "./components/pages/Home.vue";
import Menu from "./components/pages/Menu.vue";
import Gallery from "./components/pages/Gallery.vue";
import Staff from "./components/pages/Staff.vue";
import About from "./components/pages/About.vue";
import Booking from "./components/modules/Booking.vue";

export default {
  name: "App",
  components: {
    Home,
    Menu,
    Gallery,
    Staff,
    About,
    Booking
  },
  data() {
    return {
      options: {
        licenseKey: "223B288E-330F4DFD-A035CABD-56DEC1F7",
        anchors: ["home", "menu", "gallery", "staff", "about"],
        scrollOverflow: true
      },
      bookingShow: false
    };
  },
  methods: {
    scrollDown() {
      this.$refs.fullpage.api.moveSectionDown();
    }
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
  .mobile-container {
    width: 350px;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
  }
}

$pages: "home", "menu", "gallery", "staff", "about";
@each $page in $pages {
  .fp-viewing-#{$page} {
    #nav-#{$page} {
      color: rgb(250, 196, 196);
    }
  }
}
</style>

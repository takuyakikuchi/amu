import Vue from "vue";
import store from "./store/store.js";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import VueFullPage from "vue-fullpage.js";
import App from "./App.vue";
import Cloudinary from "cloudinary-vue";

Vue.config.productionTip = false;

Vue.use(VueFullPage);
Vue.use(Cloudinary, {
  configuration: {
    cloudName: "dmxwje5he"
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

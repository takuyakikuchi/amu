import Vue from "vue";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
  render: h => h(App)
}).$mount("#app");

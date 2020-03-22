import Vue from "vue";
import store from "./store/store.js";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import VueFullPage from "vue-fullpage.js";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

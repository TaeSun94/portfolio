import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import VueTypePlugin from 'vue-typer';
Vue.use(Vuetify);
Vue.use(VueTypePlugin);
Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount("#app");

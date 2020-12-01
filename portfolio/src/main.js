import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTyperPlugin from 'vue-typer'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from "./router";
import App from './App.vue';
import { store } from "./Store/store";
import Axios from "axios";
import 'nprogress/nprogress.css'
import vuetify from './plugins/vuetify';
export const bus = new Vue();


Vue.config.productionTip = false
Axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

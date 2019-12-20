import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from "./routes";
import App from './App.vue';
import { store } from "./Store/store";
import Axios from "axios";

export const bus = new Vue();

Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  mode:"history"
})

Axios.defaults.baseURL = "https://project-42b55.firebaseio.com"
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

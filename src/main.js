import Vue from 'vue'
import VueBootstrap from "bootstrap-vue"
import VueRouter from 'vue-router'
import { routes } from "./routes";
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueBootstrap)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

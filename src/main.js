import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from "./routes";
import App from './App.vue';


export const bus = new Vue();

Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  mode:"history"
})

router.afterEach((to, from)=>{
  console.log(to);
  console.log(from);
})
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

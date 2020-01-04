import Vue from 'vue'
import Router from 'vue-router'
import NProgress from "nprogress";
import { routes } from "../routes";

Vue.use(Router)

const router = new Router({
  routes,
  mode:"history"
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  if(to || from){
    NProgress.done()
  }

})

export default router
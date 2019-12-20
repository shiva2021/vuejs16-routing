<template>
  <div class="container customClass">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-5 col-lg-offset-4">
      <h3>Welcome to User Details Application</h3>
    </div>
    <br />
    <br />
    <br />
    <div class="container">
      <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-2 col-lg-offset-2">
        <my-header-toolbar></my-header-toolbar>
      </div>
      <br />
      <br />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderOptions from "./HeaderOptions.vue";
// import  jQuery  from "jquery";
// import { bus } from "../main";
export default {
  components: {
    "my-header-toolbar": HeaderOptions
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === "/") {
      if (window.confirm("Do you really want to leave?")) {
        next();
      }
    }
  }
};
</script>
<style scoped>
.customClass {
  margin-top: 30px;
}
</style>
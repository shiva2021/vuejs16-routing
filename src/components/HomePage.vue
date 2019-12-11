<template>
  <div class="container customClass">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-5 col-lg-offset-4">
      <h3>Welcome to User Details Application</h3>
    </div>
    <div class="container">
      <my-header-toolbar></my-header-toolbar>
    </div>
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderOptions from "./HeaderOptions.vue";
export default {
  components: {
    "my-header-toolbar": HeaderOptions
  }
};
</script>
<style scoped>
.customClass {
  margin-top: 30px;
}
</style>
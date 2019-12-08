<template>
  <div id="app">
    <div class="col-md-5 col-sm-6 col-lg-4 col-md-offset-3 col-sm-offset-5 col-lg-offset-5">
      <h4>Lets Learn VueJs Routing</h4>
    </div>
    <div class="col-md-5 col-sm-6 col-lg-4 col-md-offset-2 col-sm-offset-2 col-lg-offset-1">
      <app-header></app-header>
      <br />
      <br />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    "app-header": Header
  }
};
</script>
<style scoped>
#app{
  margin-top: 40px
}
</style>
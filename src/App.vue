<template>
  <div id="app">
    <app-homepage></app-homepage>
  </div>
</template>

<script>
import Homepage from "./components/HomePage.vue";
export default {
  name: 'app',
  components:{
     'app-homepage': Homepage
  }
}
</script>

<style>

</style>

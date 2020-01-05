<template>
  <div id="app">
    <app-wrapper></app-wrapper>
  </div>
</template>

<script>
import AppWrapper from "./components/wrappers/AppWrapper.vue";
export default {
  name: 'app',
  components:{
     'app-wrapper': AppWrapper
  }
}
</script>

<style>

</style>

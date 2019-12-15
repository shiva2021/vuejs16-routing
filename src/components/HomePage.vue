<template>
  <div class="container">
    <app-homepic></app-homepic>
  </div>
</template>
<script>
import HomePic from "./HomePic.vue";
export default{
  components:{
    "app-homepic": HomePic
  }
}
</script>
<style scoped>
.customClass {
  margin-top: 30px;
}
</style>
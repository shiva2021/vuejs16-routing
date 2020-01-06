<template>
  <v-app id="inspire">
    <v-app-bar app color="deep-purple accent-4" dark>
      <v-toolbar-title>
        User Directory Application
        <code>/</code>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link
        v-if="!loggedIn"
        class="btn btn-default customClass deep-purple accent-4"
        tag="button"
        to="/register"
      >Register User</router-link>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
    
    }
  },
  computed:{
    loggedIn(){
     return this.$store.getters.getUserLoginStatue;
    }
  },
  /**This will clear the browser local storage when the user closes the browser **/
  created() {
    window.addEventListener(
      "beforeunload",
      () => {
        //I CAN ACCESS TO this VARIABLE
        localStorage.clear();
      },
      false
    );
  },

  methods: {}
};
</script>
<style scoped>
.customClass {
  margin-left: 2%;
  color: white;
  font-size: 1.25rem;
}
</style>
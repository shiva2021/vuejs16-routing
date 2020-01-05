<template>
  <router-view></router-view>
</template>

<script>
export default {
    /**This will clear the browser local storage when the user closes the browser **/
  created() {
            window.addEventListener('beforeunload', () => {
            //I CAN ACCESS TO this VARIABLE
            localStorage.clear();
        }, false)
  },

  methods: {

  }
};
</script>
<template>
  <div class="container">
    <ul class="nav nav-pills nav-fill">
      <router-link tag="li" active-class="active" to="/main/Home" exact>
        <a>Home</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/main/user">
        <a>User List</a>
      </router-link>
      <li @click="onLogout">
        <a>Logout</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    onLogout() {
      if (window.confirm("Do you really want to leave?")) {
        this.$router.push({path:'/'});
        this.$store.dispatch('aSetUserLoginStatus', false)
        localStorage.clear();
      }
    }
  }
};
</script>
<style scoped>
li {
  cursor: pointer;
}
</style>
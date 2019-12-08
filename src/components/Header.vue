<template>
  <div class="container">
    <!-- <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/user">Details</router-link>
      </li>
    </ul> -->

    <ul class="nav nav-pills">
      
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active" ><a>Details</a></router-link>

    </ul>
  </div>
</template>
<script>
export default {};
</script>
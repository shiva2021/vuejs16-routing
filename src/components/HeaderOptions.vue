<template>
    <div class="container">
        <ul class="nav nav-pills nav-fill">
            <router-link tag="li" active-class='active' to='/main/Home' exact><a>Home</a></router-link>
            <router-link tag="li" active-class='active' to='/main/user'><a>User List</a></router-link>
            <router-link tag="li" active-class='' to='/'><a>Logout</a></router-link>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>

</style>
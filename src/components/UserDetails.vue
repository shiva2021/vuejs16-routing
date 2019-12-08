<template>
  <div class="container">
      <h3>Here are the user details:</h3>
      <br>
      <ul>
        <li :key="User.id" v-for="User in Users">{{User}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Users: ["Shivang", "Ashish", "Siddiqui", "Jack", "Dave"]
    };
  }
};
</script>
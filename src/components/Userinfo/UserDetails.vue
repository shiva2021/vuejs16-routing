<template>
  <div class="container">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-5 col-lg-offset-3">
      <h2>Here's your favourite Employee's details:</h2>
      <br />
      <form>
        <div class="form-group">
          <label class="form-control">Name: {{empData[id].name}}</label>
        </div>
        <div class="form-group">
          <label class="form-control">Job: {{empData[id].job}}</label>
        </div>
        <div class="form-group">
          <button class="btn btn-primary customClass" @click.prevent="navBack">Go Back</button>
          <button class="btn btn-primary" @click.prevent="viewContactInfo(id)">Contact Details</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      empData: [
        { id: 1, name: "Shivang Chaturvedi", job: "Engineer" },
        { id: 2, name: "Mohammad Siddiqui", job: "Farmer" },
        {
          id: 3,
          name: "Frank Gallagher",
          job: "He drinks all day.. A narcissist Scammer!"
        }
      ]
    };
  },
  methods: {
      viewContactInfo(id){
          this.$router.push({path:`/user/${id}/contact`})
      },
      navBack(){
        this.$router.go(-1)
      }
  }
};
</script>
<style scoped>
.customClass{
  margin-right: 2%
}
</style>
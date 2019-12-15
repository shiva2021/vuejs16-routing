<template>
  <div class="container">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-2 col-lg-offset-2">
      <h2>Here's how you can contact your favourite Employee:</h2>
      <br />
      <form>
        <div class="form-group">
          <label class="form-control">Name: {{empData[id].name}}</label>
        </div>
        <div class="form-group">
          <label class="form-control">Phone No.: {{empData[id].contact}}</label>
        </div>
        <div class="form-group">
          <label class="form-control">Country: {{empData[id].country}}</label>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click.prevent="navBack">Go Back</button>
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
        { id: 1, name: "Shivang Chaturvedi", contact: "+1-121-556-8700", country: "US"},
        { id: 2, name: "Mohammad Siddiqui", contact: "+78-32-326-8791", country: "Africa" },
        { id: 3, name: "Frank Gallagher", contact: "+1-989-66565", country: "US" }
      ],
      navigatedFrom: '',
      currentParameter: ''
    };
  },
    methods: {
        navBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>

</style>
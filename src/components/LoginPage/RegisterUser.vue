<template>
  <div id="idLogin" class="container">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-5 col-lg-offset-3">
      <form @submit="checkForm">
        <fieldset>
          <legend>Create a new account</legend>
          <div class="form-group">
            <div class="container" v-if="errors.length">
              <ul>
                <li :key="error.id" v-for="error in errors">{{error}}</li>
              </ul>
            </div>
          </div>
          <div class="form-group">
            <div class="container">
              <label for="idusrId">User Id:</label>
            </div>
            <div class="container">
              <input id="idusrId" type="text" v-model="registerUser.usrId" />
            </div>
          </div>
          <div class="form-group">
            <div class="container">
              <label for="idusrPwd">Password:</label>
            </div>
            <div class="container">
              <input id="idusrPwd" type="password" v-model="registerUser.usrPwd" />
            </div>
          </div>
          <div class="form-group">
            <div class="container">
              <label for="idconfirmPwd">Confirm Password:</label>
            </div>
            <div class="container">
              <input id="idconfirmPwd" type="password" v-model="confirmPwd" />
            </div>
          </div>
          <div class="container">
          <p>
            <input type="submit" class="btn btn-default" value="Register" />
          </p>
          </div>
        </fieldset>
      </form>
        <div class="alert-box success">Successful Alert !!!</div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      errors: [],
      registerUser: {
        usrId: "",
        usrPwd: "",
        usrEmail: ""
      },
      confirmPwd: ""
    };
  },
  methods:{
      checkForm(e){
          e.preventDefault();
          if(this.registerUser.usrId && this.registerUser.usrPwd && this.confirmPwd && (this.registerUser.usrPwd === this.confirmPwd)){
              Axios.post("/users.json", this.registerUser).then(
                function(){
                     $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                     this.$router.push({path:'/'});
                }.bind(this)
              )
          }else{
              this.errors.push('Either the passwords do not match or the fields are missing some information!')
          }
      }
  }
};
</script>
<style scoped>
.success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
    display: none;
}
</style>
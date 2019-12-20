<template>
  <div id='idLogin' class="container">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-5 col-lg-offset-3">
      <form>
        <fieldset>
          <legend>Login</legend>
          <div class="form-group">
            <div class="container">
              <label for="idusrId">User Id:</label>
            </div>
            <div class="container">
              <input id="idusrId" type="text" v-model="usrId" />
            </div>
          </div>
          <div class="form-group">
            <div class="container">
              <label for="idusrPwd">Password:</label>
            </div>
            <div class="container">
              <input id="idusrPwd" type="password" v-model="usrPwd" />
            </div>
          </div>
          <div class="form-group">
            <button id="idsubmitBtn" class="btn btn-default" @click.prevent="onSubmit">Login</button>
            <router-link class="btn btn-default customClass" tag="button" to="/register">Register User</router-link>
          </div>
        </fieldset>
      </form>
      <div class="alert-box failure">{{failureMsg}}</div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import jQuery from "jquery";
// import { bus } from "../../main";
export default {
  data() {
    return {
      usrId: "",
      usrPwd: "",
      UsrData: 
        {
          usrId: "admin",
          usrPwd: "admin"
        },
        responseData: {},
        bAuthenticated: false,
        failureMsg: ""
    };
  },
  methods: {
    onSubmit() {
      Axios.get("/users.json").then(
        function(res){
     
          this.responseData = res.data;
          jQuery.each(this.responseData, function(prop, value){
            if((this.usrId === value.usrId) && (this.usrPwd === value.usrPwd) ){
              this.bAuthenticated = true;
            }
          }.bind(this))
          if(this.bAuthenticated){
             this.$router.push({ path: "/main/Home" });
          }else{
            this.failureMsg = "Incorrect user credentials!"
          jQuery( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
          }
        }.bind(this)
      );
      // if (this.usrId && this.usrPwd) {
      //   if (
      //     this.usrId === this.UsrData.usrId &&
      //     this.usrPwd === this.UsrData.usrPwd
      //   ) {
      //     this.$router.push({ path: "/main/Home" });
      //   //  bus.$emit('isAuthenticated', {isAuthenticated: true})
      //   }else{
      //       this._throwException();
      //   }
      // } else {
      //   this._throwException();
      // }
    },
    _throwException() {
      window.alert("Incorrect credentials! Please try again.");
    }
  }
};
</script>
<style scoped>
legend { 
  display: grid;
  padding-left: 2px;
  padding-right: 0px;
  border: inherit;
}

#idLogin{
    margin-top: 5%;
}

.customClass{
  margin-left: 2%
}

.failure {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    display: none;
}
</style>
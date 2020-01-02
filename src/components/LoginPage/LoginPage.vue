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
              <input id="idusrId" type="email" v-model="usrEmail" />
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
// import Axios from 'axios';
// import jQuery from "jquery";
// import { bus } from "../../main";
export default {
  data() {
    return {
      usrEmail: "",
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
      var oPayload = {
                email : this.usrEmail,
                password: this.usrPwd,
                returnSecureToken: true
      }
      this.$store.dispatch('aClickLoginBtn', oPayload);
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
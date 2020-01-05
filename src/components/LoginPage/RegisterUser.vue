<template>
  <div id="idLogin" class="container">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-5 col-lg-offset-3 customClass">
      <form @submit="checkForm" v-if="!bUserCreated">
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
              <label for="idusrName">Full Name:</label>
            </div>
            <div class="container">
              <input id="idusrName" type="text" v-model="registerUser.usrName" />
            </div>
          </div>
          <div class="form-group">
            <div class="container">
              <label for="idusrEmail">User Email:</label>
            </div>
            <div class="container">
              <input id="idusrEmail" type="email" v-model="registerUser.usrEmail" />
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
          <div class="form-group">
            <div class="container">
              <label for="idContactInfo">Contact Number:</label>
            </div>
            <div class="container">
              <select name="Country" id="idCountryCode">
                <option value="india">+91</option>
                <option value="usa">+1</option>
              </select>
              <input id="idContactInfo" class="margin" type="number" v-model="registerUser.usrContact" />
            </div>
          </div>
          <div class="container">
            <p>
              <input type="submit" class="btn btn-default" value="Register" />
            </p>
          </div>
        </fieldset>
      </form>
      <div class="alert-box failure" v-if="failureMsg!=='undefined'">{{failureMsg}}</div>
      <form v-if="bUserCreated">
        <fieldset>
          <legend>New User Created!</legend>
          <div class="container">
            <button class="btn btn-default" @click="goBackToLogin">Go Back to Login Page</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
// import Axios from "axios";
import jQuery from "jquery";
export default {
  data() {
    return {
      errors: [],
      registerUser: {
        usrName: "",
        usrPwd: "",
        usrEmail: "",
        usrContact: ""
      },
      confirmPwd: "",
      idToken: ""
    };
  },
  created(){
    this.$store.dispatch('aResetUserCreatedStatus')
  },
  computed: {
    failureMsg() {
      var sMessage = this.$store.getters.getFilureMessage;
      jQuery("div.failure")
        .fadeIn(300)
        .delay(1500)
        .fadeOut(400);
      return sMessage;
    },
    bUserCreated() {
      return this.$store.getters.getUserCreatedStatus;
    }
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      var payload = {
        email: this.registerUser.usrEmail,
        password: this.registerUser.usrPwd,
        contact: this.registerUser.usrContact
      };
      e.preventDefault();
      if (
        this.registerUser.usrEmail &&
        this.registerUser.usrPwd &&
        this.confirmPwd &&
        this.registerUser.usrPwd === this.confirmPwd
      ) {
        this.$store.dispatch("aRegisterUser", payload);
      } else {
        this.errors.push(
          "Either the passwords do not match or the fields are missing some information!"
        );
      }
    },

    goBackToLogin() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style scoped>
.customClass {
  margin-top: 5%;
}
.success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  display: none;
}
.failure {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  display: none;
}

.margin{
  margin-left: 1%
}
</style>
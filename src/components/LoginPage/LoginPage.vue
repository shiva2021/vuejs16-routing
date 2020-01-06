<template>
  <v-app id="inspire">
    <div id="idLogin" class="container">
      <v-app-bar app color="deep-purple accent-4" dark>
        <v-toolbar-title>
          User Directory Application
          <code>/</code>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link
          class="btn btn-default customClass deep-purple accent-4"
          tag="button"
          to="/register"
        >Register User</router-link>
      </v-app-bar>
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field 
                    label="Login" 
                    name="login" 
                    :prepend-icon="svgPath"
                    type="text" 
                    v-model="usrEmail"/>
    
                    <v-text-field
                      id="password"
                      label="Password"
                      :prepend-icon="scgLock"
                      name="password"
                      type="password"
                      v-model="usrPwd"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" @click="onSubmit">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>
<script>
// import Axios from 'axios';
// import jQuery from "jquery";
// import { bus } from "../../main";
import { mdiAccount, mdiLockOutline } from '@mdi/js'
export default {
  data() {
    return {
      svgPath: mdiAccount,
      scgLock: mdiLockOutline,
      usrEmail: "",
      usrPwd: "",
      UsrData: {
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
        email: this.usrEmail,
        password: this.usrPwd,
        returnSecureToken: true
      };
      this.$store.dispatch("aClickLoginBtn", oPayload);
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

#idLogin {
  margin-top: 5%;
}

.customClass {
  margin-left: 2%;
  color: white;
  font-size: 1.25rem;
}

.failure {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  display: none;
}
</style>
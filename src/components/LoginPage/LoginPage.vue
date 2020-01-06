<template>
  <v-app id="inspire">
    <div id="idLogin" class="container">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="5">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <ValidationProvider name="User Id" rules="required|email">
                      <div slot-scope="{ errors }">
                        <v-text-field
                          label="User Id/Email"
                          name="login"
                          :prepend-icon="icons.svgPath"
                          type="text"
                          v-model="usrEmail"
                          :class="{ 'text-gray-700': !errors[0], 'text-red-600': errors[0] }"
                        />
                        <span
                          class="block text-red-600 text-xs absolute bottom-0 left-0"
                          v-if="errors[0]"
                        >{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="Password" rules="required">
                      <div slot-scope="{ errors }">
                        <v-text-field
                          id="password"
                          label="Password"
                          :prepend-icon="icons.scgLock"
                          name="password"
                          :type="inputType"
                          v-model="usrPwd"
                          :append-icon="passwordOuterIcon"
                          @click:append="onViewPassword"
                        />
                        <p>{{ errors[0] }}</p>
                      </div>
                    </ValidationProvider>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <div class="container">
                    <a @click="onNewUserRegister">Register New User</a>
                  </div>
                  <v-btn color="primary" class="customMargin" @click="onSubmit">Login</v-btn>
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
import { mdiAccount, mdiLockOutline, mdiEye, mdiEyeOff } from "@mdi/js";
import { ValidationProvider, extend } from "vee-validate";
import { email } from "vee-validate/dist/rules";
extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});

extend("email", {
  ...email,
  message: "Please enter a valid email!"
});

export default {
  components: {
    ValidationProvider
  },
  data() {
    return {
      passwordOuterIcon: mdiEyeOff,
      icons: {
        svgPath: mdiAccount,
        scgLock: mdiLockOutline
      },
      inputType: "password",
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
    },
    onViewPassword() {
      if (this.inputType === "password") {
        this.inputType = "text";
        this.passwordOuterIcon = mdiEye;
      } else {
        this.inputType = "password";
        this.passwordOuterIcon = mdiEyeOff;
      }
    },
    onNewUserRegister() {
      this.$router.push("/register");
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

.customMargin {
  margin-left: 45%;
}
</style>
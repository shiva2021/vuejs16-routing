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
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
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
        }
    };
  },
  methods: {
    onSubmit() {
      if (this.usrId && this.usrPwd) {
        if (
          this.usrId === this.UsrData.usrId &&
          this.usrPwd === this.UsrData.usrPwd
        ) {
          this.$router.push({ path: "/main/Home" });
        //  bus.$emit('isAuthenticated', {isAuthenticated: true})
        }else{
            this._throwException();
        }
      } else {
        this._throwException();
      }
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
</style>
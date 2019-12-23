import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios"
import $ from 'jquery'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        bAuthenticated: false,
        idToken: null, 
        usrEmail: null
    },
    getters: {
        getAuthenticationState: state =>{
            return state.bAuthenticated;
        }
    },
    actions: {
        aRegisterUser(payload){
            Axios.post("/accounts:signUp?key=AIzaSyA86kNN7llYhDW79_sK3eTf1nKHbB7uSD4", payload).then(
                function(response){
                     $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                     this.idToken = response.data.idToken
                     this.$router.push({path:'/'});
                }.bind(this),
                function(error){
                   this.errors.push(error.response.data.error.message)
                  
                }.bind(this)
              )
        },

    },

    mutations: {
        aRegisterUser(){

        }
    }
})
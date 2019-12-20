import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        bAuthenticated: false
    },
    getters: {
        getAuthenticationState: state =>{
            return state.bAuthenticated;
        }
    }
})
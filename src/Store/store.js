import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios"
import $ from 'jquery'
import { customAxios } from "../custom-axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bAuthenticated: false,
        login:{
            idToken: null,
            usrEmail: null,
        },
        registerUser:{
            idToken: null,
            usrEmail: null,
        },
        usrId: null,
        failureMsg: "",
        bUserCreated: false,
        loginFailureMsg: "",
        saveResponseData: {},
        saveError: {},
        registeredUserData: {}
    },
    getters: {
        getFilureMessage: state => {
            return state.failureMsg;
        },
        getLoginFilureMessage: state => {
            return state.loginFailureMsg;
        },
        getUserCreatedStatus: state => {
            return state.bUserCreated
        }
    },
    actions: {
        aRegisterUser({ commit }, payload) {
            commit('mRegisterUser', payload)
        },

        aResetUserCreatedStatus({ commit }) {
            commit('mResetUserCreatedStatus', false);
        },

        aClickLoginBtn({ commit }, payload) {
            commit('mClickLoginBtn', payload);
        },
        aGetLoginData({ commit }, response) {
            commit('mGetLoginData', response)
        },
        aAddUserToDb({commit}, payload){
            commit('mAddUserToDb', payload)
        }
    },

    mutations: {
        mRegisterUser(state, payload) {
            state.registeredUserData = payload;
            Axios.post("/accounts:signUp?key=AIzaSyA86kNN7llYhDW79_sK3eTf1nKHbB7uSD4", {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }).then(
                function (response) {
                    $("div.success").fadeIn(300).delay(1500).fadeOut(400);
                    state.registerUser.idToken = response.data.idToken;
                    state.registerUser.usrId = response.data.localId;
                    // this.state.bUserCreated = true;
                    store.dispatch('aAddUserToDb', state.registeredUserData )
                }.bind(this),
                function (error) {
                    var errors = [];
                    errors.push(error.response.data.error.message)
                    this.state.failureMsg = errors[0];
                    this.state.bUserCreated = false;
                }.bind(this)
            )
        },
        mResetUserCreatedStatus(state, status) {
            this.state.bUserCreated = status;
        },
        mClickLoginBtn(state, payload) {
            Axios.post("/accounts:signInWithPassword?key=AIzaSyA86kNN7llYhDW79_sK3eTf1nKHbB7uSD4", payload).then(
                function (res) {
                    store.dispatch('aGetLoginData', res)
                }.bind(this),
                function (error) {
                    if (error.response.data.error.message === "EMAIL_NOT_FOUND") {
                        state.loginFailureMsg = "invalid User";
                    }
                }.bind(this)
            );
        },
        mGetLoginData(state, response) {
            state.login.usrId = response.data.localId;
            state.login.idToken = response.data.idToken;
        },

        mAddUserToDb(state, payload){
            customAxios.post('/users.json' + '?auth=' + state.registerUser.idToken, payload)
            .then(
                ()=>{
                    state.bUserCreated=true
                }
            )
            .catch(
                error=>{
                    state.saveError = error;
                }
            )
        }
    }
})
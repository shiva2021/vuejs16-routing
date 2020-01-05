import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios"
import $ from 'jquery'
import { customAxios } from "../custom-axios";
import router from "../router"
import NProgress from "nprogress";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bAuthenticated: false,
        login: {
            idToken: null,
            usrId: null,
        },
        registerUser: {
            idToken: null,
            usrId: null,
        },
        usrId: null,
        failureMsg: "",
        bUserCreated: false,
        loginFailureMsg: "",
        saveResponseData: {},
        saveError: {},
        registeredUserData: {},
        userData: {},
        readError: {}
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
        aSetLoginData({ commit }, response) {
            commit('mSetLoginData', response)
        },
        aAddUserToDb({ commit }, payload) {
            commit('mAddUserToDb', payload)
        },
        aReadAllUsers({ commit }) {
            commit('mReadAllUsers')
        },
        aSetSessionTimeOut({ commit }, expiresIn) {
            setTimeout(function () {
                commit('mSessionTimeOut')
            }.bind(this), expiresIn * 1000)
        },

        aValidateToken({ commit }) {
            commit('mValidateToken')
        }
    },

    mutations: {
        mRegisterUser(state, payload) {
            state.registeredUserData = payload;
            NProgress.start();
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
                    store.dispatch('aAddUserToDb', state.registeredUserData)
                    
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
                    NProgress.start();
                    store.dispatch('aSetLoginData', res)

                    /**Read all the users from Realtime database */
                    store.dispatch('aReadAllUsers')

                    /**Save token for validating browser session */
                    localStorage.setItem('idToken', res.data.idToken);

                    /**Setting expirationDate based on token expire time */
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                    localStorage.setItem('expirationDate', expirationDate)

                    /**Storing User Id in the browser local storage*/
                    localStorage.setItem('localId', res.data.localId)

                    /**Setting timeout based on expire date */
                    store.dispatch('aSetSessionTimeOut', res.data.expiresIn)
                }.bind(this),
                function (error) {
                    if (error.response.data.error.message === "EMAIL_NOT_FOUND") {
                        state.loginFailureMsg = "invalid User";
                    }
                }.bind(this)
            );
        },
        mSetLoginData(state, response) {
            state.login.usrId = response.data.localId;
            state.login.idToken = response.data.idToken;
        },

        mAddUserToDb(state, payload) {
            customAxios.post('/users.json' + '?auth=' + state.registerUser.idToken, payload)
                .then(
                    () => {
                        state.bUserCreated = true
                        NProgress.done();
                    }
                )
                .catch(
                    error => {
                        state.saveError = error;
                    }
                )
        },
        mReadAllUsers(state) {
            customAxios.get('/users.json' + '?auth=' + state.login.idToken)
                .then(
                    function (res) {
                        state.userData = res.data;
                        router.push({ path: '/main/Home' });
                        NProgress.done();
                    }.bind(this)
                )
                .catch(
                    error => {
                        state.readError = error;
                    }
                )
        },
        mSessionTimeOut(state) {
            state.login.idToken = null;
            state.login.usrId = null;
            alert("Session Expired");
            router.push({ path: '/' });
        },

        mValidateToken() {
            const sToken = localStorage.getItem('idToken'),
                sUsrId = localStorage.getItem('localId'),
                dCurrentDate = new Date(),
                dExpiryDate = localStorage.getItem('expirationDate');
            var mLoginData = {};

            if (!sToken) {
                return
            }
            if (dCurrentDate >= dExpiryDate) {
                return
            }
            mLoginData = {
                'data': {
                    'idToken': sToken,
                    'localId': sUsrId
                }
            }

            store.dispatch('aSetLoginData', mLoginData);
        }
    }
})
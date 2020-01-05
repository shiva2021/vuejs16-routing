const LoginPage = () => import("./components/LoginPage/LoginPage.vue");
const Mainpage = () => import("./components/wrappers/MainpageWrapper.vue");
const UserList = () => import("./components/Userinfo/UserList.vue");
const HomePage = () => import("./components/HomePage.vue")
const UserDetails = () => import("./components/Userinfo/UserDetails.vue")
const ContactInfo = () => import("./components/Userinfo/ContactInfo.vue")
const UserPageWrapper = () => import("./components/Userinfo/UserPageWrapper.vue")
const RegisterUser = () => import("./components/LoginPage/RegisterUser.vue")

// import LoginPage from "./components/LoginPage/LoginPage.vue"
// import {store} from "./Store/store";
export const routes = [
    { path: '/', component: LoginPage },
    { path: '/register', component: RegisterUser },
    {
        path: '/main', component: Mainpage, children: [
            {
                path: 'Home', component: HomePage,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem('idToken')) {
                        next();
                    } else {
                        alert('User Not Authorized');
                        next('/')
                    }
                }
            },
            {
                path: 'user', component: UserPageWrapper, props: true,
                children: [
                    {
                        path: '', component: UserList, props: true,
                        beforeEnter(to, from, next) {
                            if (localStorage.getItem('idToken')) {
                                next();
                            } else {
                                alert('User Not Authorized');
                                next('/')
                            }
                        }
                    },
                    {
                        path: ':id', component: UserDetails, props: true,
                        beforeEnter(to, from, next) {
                            if (localStorage.getItem('idToken')) {
                                next();
                            } else {
                                alert('User Not Authorized');
                                next('/')
                            }
                        }
                    },
                    {
                        path: ':id/contact', component: ContactInfo, props: true,
                        beforeEnter(to, from, next) {
                            if (localStorage.getItem('idToken')) {
                                next();
                            } else {
                                alert('User Not Authorized');
                                next('/')
                            }
                        }
                    }
                ],
                beforeEnter(to, from, next) {
                    if (localStorage.getItem('idToken')) {
                        next();
                    } else {
                        alert('User Not Authorized');
                        next('/')
                    }
                }
            }
        ]
    }
]
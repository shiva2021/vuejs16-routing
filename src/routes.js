// const LoginPage = ()=> import(/*webpackChunkName: "group-foo"*/ "./components/LoginPage/LoginPage.vue");
const Mainpage = () => import(/*webpackChunkName: "group-foo"*/'./components/MainpageWrapper.vue');
const UserList = () => import("./components/Userinfo/UserList.vue");
const HomePage = () => import("./components/HomePage.vue")
const UserDetails = () => import("./components/Userinfo/UserDetails.vue")
const ContactInfo = () => import("./components/Userinfo/ContactInfo.vue")
const UserPageWrapper = () => import("./components/Userinfo/UserPageWrapper.vue")

// import Mainpage from "./components/MainpageWrapper.vue";
import LoginPage from "./components/LoginPage/LoginPage.vue"
// import UserList from "./components/Userinfo/UserList.vue";
// import HomePage from "./components/HomePage.vue";
// import UserDetails from "./components/Userinfo/UserDetails.vue";
// import ContactInfo from "./components/Userinfo/ContactInfo.vue";
// import UserPageWrapper from "./components/Userinfo/UserPageWrapper.vue";
export const routes = [
    { path: '/', component: LoginPage },
    {
        path: '/main', component: Mainpage, children: [
            { path: 'Home', component: HomePage },
            {
                path: 'user', component: UserPageWrapper, props: true,
                children: [
                    { path: '', component: UserList, props: true },
                    { path: ':id', component: UserDetails, props: true },
                    { path: ':id/contact', component: ContactInfo, props: true }
                ]
            }
        ]
    }
]
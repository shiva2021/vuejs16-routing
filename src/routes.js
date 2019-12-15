const Mainpage = () => import('./components/MainpageWrapper.vue')

import Mainpage from "./components/MainpageWrapper.vue";
import UserList from "./components/Userinfo/UserList.vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage/LoginPage.vue"
import UserDetails from "./components/Userinfo/UserDetails.vue";
import ContactInfo from "./components/Userinfo/ContactInfo.vue";
import UserPageWrapper from "./components/Userinfo/UserPageWrapper.vue";
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
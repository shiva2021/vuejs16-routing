import UserList from "./components/Userinfo/UserList.vue";
import HomePic from "./components/HomePic.vue";
import UserDetails from "./components/Userinfo/UserDetails.vue";
import ContactInfo from "./components/Userinfo/ContactInfo.vue";
import UserPageWrapper from "./components/Userinfo/UserPageWrapper.vue";
export const routes = [
    { path: '/', component: HomePic },
    {
        path: '/user', component: UserPageWrapper, props: true,
        children: [
            { path: '', component: UserList, props: true },
            { path: ':id', component: UserDetails, props: true },
            { path: ':id/contact', component: ContactInfo, props: true }

        ]
    }
]
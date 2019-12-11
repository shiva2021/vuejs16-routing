import UserList from "./components/Userinfo/UserList.vue";
import HomePic from "./components/HomePic.vue";
import UserDetails from "./components/Userinfo/UserDetails.vue"
export const routes =[
    { path : '/user', component: UserList },
    { path : '/', component: HomePic },
    { path : '/user/:id', component: UserDetails, props:true} 


]
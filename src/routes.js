import HelloWorld from "./components/HelloWorld.vue"
import UserDetails from "./components/UserDetails.vue"

export const routes = [
    {path: '', component: HelloWorld},
    {path:'/user', component: UserDetails}
]
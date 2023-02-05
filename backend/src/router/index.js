import {createRouter,createWebHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from "../views/Login.vue";
import RequestPassword from "../views/requestpassword.vue";
import ResetPassword from "../views/resetpassword.vue";

const routes = [
    {
        path:'/dashboard',
        name:'dashboard',
        component: Dashboard
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/requestpassword',
        name:'requestpassword',
        component: RequestPassword
    },
    {
        path:'/resetpassword',
        name:'resetpassword',
        component: ResetPassword
    },
];

const router = createRouter({
    history: createWebHistory(),   //domain.com#/users
    routes
})

export default router

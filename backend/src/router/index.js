import {createRouter,createWebHistory} from 'vue-router';
import AppLayout from "../components/AppLayout.vue";
import Dashboard from '../views/Dashboard.vue';
import Login from "../views/Login.vue";
import RequestPassword from "../views/requestpassword.vue";
import ResetPassword from "../views/resetpassword.vue";
import store from "../store/index.js";

const routes = [
    {
      path: '/app',
      name: 'app',
      component: AppLayout,
      meta:{
        requiresAuth: true
      },
      children:[
        {
            path:'dashboard',
            name:'app.dashboard',
            component: Dashboard
        },
        {
            path:'products',
            name:'app.products',
            component: Products
        },
      ]
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

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth && store.state.user.token){
        next({name:'login'})
    }else if(to.meta.requiresGuest && store.state.token){
        next({name:'app.dashboard'})
    }else{
        next();
    }
})

export default router

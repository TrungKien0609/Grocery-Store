import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../Views/Home.vue"
import NotFound from "../Views/NotFound.vue";
import Login from "../Views/Login.vue";
import Signup from "../Views/Signup.vue";
import ForgotPassword from "../Views/ForgotPassword.vue";
import store from '../store/index.js'
import axios from "axios";
Vue.use(VueRouter)
const routes = [
    {
        path: "/admin",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/admin/user/login",
        name: "Login",
        component: Login
    },
    {
        path: "/admin/user/signup",
        name: "Signup",
        component: Signup
    },
    {
        path: "/admin/user/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword
    },
    {
        path: "/admin*",
        name: "NotFound",
        component: NotFound,
    },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        store.dispatch('getCookie', 'usertoken').then(response => {
            if (response !== "") {
                next();
            }
            else {
                router.push({ name: 'Login' });
            }
        });
    } else {
        next();
    }
});
export default router
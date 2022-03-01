import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermCondition from "../views/TermCondition.vue";
import Offer from "../views/Offer.vue";
import NotFound from "../views/404.vue";
import FAQ from "../views/FAQ.vue";
import UserDashBoard from "../views/UserDashBoard.vue";
import CommonInfo from "../views/User/CommonInfo.vue";
import MyOrders from "../views/User/MyOrders.vue";
import UpdateProfile from "../views/User/UpdateProfile.vue";
import ChangePassword from "../views/User/ChangePassword.vue";
import Search from "../views/Search.vue";
import Product from "../views/Product.vue";
import store from '../store/index.js'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/term-condition",
    name: "TermCondition",
    component: TermCondition,
  },
  {
    path: "/offer",
    name: "Offer",
    component: Offer,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/user",
    redirect: { name: "CommonInfo" },
    name: "UserDashBoard",
    component: UserDashBoard,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "CommonInfo",
        component: CommonInfo,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "my-orders",
        name: "MyOrders",
        component: MyOrders,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "update-profile",
        name: "UpdateProfile",
        component: UpdateProfile,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: ChangePassword,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/product/:slug?",
    name: "Product",
    component: Product,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    store.dispatch('getCookie', 'usertoken').then(response => {
      if (response !== "") {
        next();
      }
      else {
        router.push({ name: 'Home' });
      }
    });
  } else {
    next();
  }
});
export default router;

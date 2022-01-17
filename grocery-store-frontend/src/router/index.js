import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermCondition from "../views/TermCondition.vue";
import Offer from "../views/Offer.vue";
import NotFound from "../views/404.vue";
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
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

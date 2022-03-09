import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: "/term-condition",
    name: "TermCondition",
    component: () => import('../views/TermCondition.vue')
  },
  {
    path: "/offer",
    name: "Offer",
    component: () => import('../views/Offer.vue')
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import('../views/404.vue')
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import('../views/FAQ.vue')
  },
  {
    path: "/user",
    redirect: { name: "CommonInfo" },
    name: "UserDashBoard",
    component: () => import('../views/UserDashBoard.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "ratting/:slug",
        name: "Rating",
        component: () => import('../views/Ratting.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "dashboard",
        name: "CommonInfo",
        component: () => import('../views/User/CommonInfo.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "my-orders",
        name: "MyOrders",
        component: () => import('../views/User/MyOrders.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "update-profile",
        name: "UpdateProfile",
        component: () => import('../views/User/UpdateProfile.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: () => import('../views/User/ChangePassword.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/search",
    name: "Search",
    component: () => import('../views/Search.vue'),
  },
  {
    path: "/product/:slug?",
    name: "Product",
    component: () => import('../views/Product.vue'),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import('../views/Checkout.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getCookie('usertoken') !== "") {
      next();
    }
    else {
      router.push({ name: 'Home' });
    }
  } else {
    next();
  }
});
export default router;

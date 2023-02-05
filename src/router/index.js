import Vue from "vue";
import VueRouter from "vue-router";
import SikdangList from "../pages/sikdang/SikdangList";
import AboutUs from "../pages/aboutUs/AboutUs";
import SikdangItem from "../pages/sikdang/SikdangItem";
import SignUp from "../pages/signup/SignUp";
import UserProfile from "../pages/UserProfile.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "sikdang",
    component: SikdangList,
  },
  { path: "/sikdang", component: SikdangList },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutUs,
  },
  { path: "/sikdang/:id", component: SikdangItem },
  { path: "/signup", component: SignUp },
  { path: "/user", component: UserProfile, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//토큰이 필요한 라우트에 토큰이 없으면 sikdang 라우트로 이동
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && store.getters.token) {
    next();
  } else if (to.meta.requiresAuth && !store.getters.token) {
    next("/sikdang");
  } else {
    next();
  }
});

export default router;

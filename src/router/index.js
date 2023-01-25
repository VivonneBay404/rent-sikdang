import Vue from 'vue'
import VueRouter from 'vue-router'
import SikdangList from '../pages/sikdang/SikdangList'
import AboutUs from '../pages/aboutUs/AboutUs'
import SikdangItem from '../pages/sikdang/SikdangItem'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sikdang',
    component: SikdangList
  },
  { path: '/sikdang', component: SikdangList },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutUs
  },
  { path: '/sikdang/:id', component: SikdangItem }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
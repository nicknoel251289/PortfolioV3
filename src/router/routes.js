import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import UI from '../views/UI.vue'
import UX from '../views/UX.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/UI', name: 'UI', component: UI },
  { path: '/UX', name: 'UX', component: UX }
]
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

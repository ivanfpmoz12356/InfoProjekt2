import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/komentar',
    name: 'KomentarView',
    component: () => import('../views/KomentarView.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/InfoView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

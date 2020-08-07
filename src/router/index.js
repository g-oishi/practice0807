import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/raspios',
    name: 'RaspiOS',
    component: () => import(/* webpackChunkName: "raspios" */ '../views/RaspiOS.vue')
  },
  {
    path: '/nginx',
    name: 'Nginx',
    component: () => import(/* webpackChunkName: "nginx" */ '../views/Nginx.vue')
  },
  {
    path: '/release',
    name: 'Release',
    component: () => import(/* webpackChunkName: "release" */ '../views/Release.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 110 }
      }
    }
    return { x: 0, y: 0 }
  }
})

export default router

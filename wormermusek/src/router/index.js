import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Agenda.vue')
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Datenschutz.vue')
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Impressum.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

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
    component: () => import(/* webpackChunkName: "datenschutz" */ '../views/Datenschutz.vue')
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import(/* webpackChunkName: "impressum" */ '../views/Impressum.vue')
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import(/* webpackChunkName: "kontakt" */ '../views/Kontakt.vue')
  },
  {
    path: '/sponsoren',
    name: 'sponsoren',
    component: () => import(/* webpackChunkName: "sponsoren" */ '../views/Sponsoren.vue')
  },
  {
    path: '/orchester',
    name: 'orchester',
    component: () => import(/* webpackChunkName: "orchester" */ '../views/Orchester.vue')
  },
  {
    path: '/dirigenten',
    name: 'dirigenten',
    component: () => import(/* webpackChunkName: "dirigenten" */ '../views/Dirigenten.vue')
  },
  {
    path: '/verwaltung',
    name: 'verwaltung',
    component: () => import(/* webpackChunkName: "verwaltung" */ '../views/Verwaltung.vue')
  },
  {
    path: '/downloads',
    name: 'downloads',
    component: () => import(/* webpackChunkName: "verwaltung" */ '../views/Downloads.vue')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/abilities',
    name: 'Abilities',
    component: () => import('../views/Abilities.vue')
  },
  {
    path: '/burgers',
    name: 'Burgers',
    component: () => import('../views/Burgers.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/Cards.vue')
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import('../views/Composition.vue')
  },
  {
    path: '/gameplay',
    name: 'Gameplay',
    component: () => import('../views/Gameplay.vue')
  },
  {
    path: '/gameover',
    name: 'Gameover',
    component: () => import('../views/Gameover.vue')
  },
  {
    path: '/important-rules',
    name: 'ImportantRules',
    component: () => import('../views/ImportantRules.vue')
  },
  {
    path: '/preparations',
    name: 'Preparations',
    component: () => import('../views/Preparations.vue')
  },
  {
    path: '/target',
    name: 'Target',
    component: () => import('../views/Target.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    component: () => import('./views/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    component: () => import('./views/layout/index.vue')
  },
  {
    path: '/new-tab',
    component: () => import('./views/new-tab/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router

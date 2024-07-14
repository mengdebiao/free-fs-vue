import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/default/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard/index.vue')
        },
        {
          path: 'files',
          name: 'Files',
          component: () => import('@/views/Files/index.vue')
        },
        {
          path: 'star',
          name: 'Star',
          component: () => import('@/views/Star/index.vue')
        },
        {
          path: 'recycle',
          name: 'Recycle',
          component: () => import('@/views/Recycle/index.vue')
        }
      ]
    }
  ]
})

export default router

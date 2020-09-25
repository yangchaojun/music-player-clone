import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Discovery from '@/page/discovery/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/discovery'
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

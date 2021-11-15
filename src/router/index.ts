import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/tabs/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: 'people',
        component: () => import('@/views/tabs/People.vue')
      },
      {
        path: 'cars',
        component: () => import('@/views/tabs/Cars.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

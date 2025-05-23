import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/Home/HomeComponent.vue'
import DashboardComponent from '@/components/Dashboard/DashboardComponent.vue'
import { authGuard } from '@/services/authGuard'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardComponent,
      beforeEnter: authGuard,
    },
  ],
})

export default router

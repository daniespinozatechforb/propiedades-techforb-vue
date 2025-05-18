import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomeComponent from '@/components/Home/HomeComponent.vue'
import DashboardComponent from '@/components/Dashboard/DashboardComponent.vue'
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
    },
  ],
})

export default router

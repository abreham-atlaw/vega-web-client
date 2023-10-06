import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/apps/auth/presentation/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    
  ]
})

export default router

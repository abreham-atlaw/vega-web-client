import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/apps/auth/presentation/views/LoginView.vue'
import SignupView from '@/apps/auth/presentation/views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/auth/login/',
		name: 'login',
		component: LoginView
	},
	{
		path: "/auth/signup/",
		name: "signup",
		component: SignupView
	}
	
  ]
})

export default router

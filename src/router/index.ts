import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/apps/auth/presentation/views/LoginView.vue'
import SignupView from '@/apps/auth/presentation/views/SignupView.vue'
import BaseView from '@/apps/core/presentation/views/BaseView.vue';
import ParentGenerationView from '@/apps/generate/presentation/views/ParentGenerateView.vue'
import SplashView from '@/apps/core/presentation/views/SplashView.vue'
import HomeView from '@/apps/core/presentation/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/auth/login/',
		name: 'login',
		component: LoginView,
	},
	{
		path: "/auth/signup/",
		name: "signup",
		component: SignupView
	},


	{
		path: "/",
		name: "spalsh",
		component: SplashView
	},

	{
		path: "/base",
		name: "base",
		component: BaseView,
		children: [
			{
				path: "core/home",
				name: "home",
				component: HomeView
			},
			{
				path: "generate",
				name: "generate",
				component: ParentGenerationView
			},
		]
	}
	
  ]
})

export default router

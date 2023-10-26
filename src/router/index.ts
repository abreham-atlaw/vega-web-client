import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/features/auth/presentation/views/LoginView.vue'
import SignupView from '@/features/auth/presentation/views/SignupView.vue'
import BaseView from '@/features/core/presentation/views/BaseView.vue';
import ParentGenerationView from '@/features/generate/presentation/views/ParentGenerateView.vue'
import SplashView from '@/features/core/presentation/views/SplashView.vue'
import HomeView from '@/features/core/presentation/views/HomeView.vue'
import RoutedGenerateView from '@/features/generate/presentation/views/RoutedGenerateView.vue';
import LyricsView from '@/features/player/presentation/views/LyricsView.vue';
import PlaylistView from '@/features/core/presentation/views/PlaylistView.vue';
import LibraryView from '@/features/core/presentation/views/LibraryView.vue';


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
				path: "core/playlist/detail",
				name: "playlist",
				component: PlaylistView
			},
			{
				path: "core/library",
				name: "library",
				component: LibraryView
			},



			{
				path: "generate/query",
				name: "generate query",
				component: RoutedGenerateView
			},
			{
				path: "generate",
				name: "generate",
				component: ParentGenerationView
			},

			{
				path: "player/lyrics",
				name: "lyrics",
				component: LyricsView
			}
		]
	}
	
  ]
})

export default router

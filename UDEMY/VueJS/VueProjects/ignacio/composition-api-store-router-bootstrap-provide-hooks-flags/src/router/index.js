import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Flags from '../views/Flags.vue'
import Hooks from '../views/Hooks.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/flags',
		name: 'Flags',
		component: Flags
	},
	{
		path: '/hooks',
		name: 'Hooks',
		component: Hooks
	},
	{
		path: '/tareas',
		name: 'Tareas',
		component: () => import(/* webpackChunkName: "tareas" */ '../views/Tareas.vue')
	}
	]

	const router = createRouter({
		history: createWebHistory(process.env.BASE_URL),
		routes
	})

export default router

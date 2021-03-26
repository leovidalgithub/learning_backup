import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contador from '../components/Contador.vue'
import Paises from '../views/Paises.vue'
import Pais from '../views/Pais.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/contador',
		name: 'Contador',
		component: Contador
	},
	{
		path: '/paises',
		name: 'Paises',
		component: Paises
	},
	{
		path: '/paises/:nombre',
		name: 'Pais',
		props: true, // para enviar 'nombre' como un prop
		component: Pais,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

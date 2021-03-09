import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home'
import About from '../views/About'
import Bar from '../views/Bar'

const routes = [
	// { path: '/a', redirect: '/b' }, you can use either path or route name
	// { path: '/a', redirect: { name: 'foo' }},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: true }
	},
	{
		path: '/about',
		name: 'About',
		component: About,
		children: [
			{
				path: 'bar',
				component: Bar
			}
		]
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/registro',
		name: 'Registro',
		component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
	},
	{
		path: '/ingreso',
		name: 'Ingreso',
		component: () => import(/* webpackChunkName: "ingreso" */ '../views/Ingreso.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		if(store.getters.usuarioAutenticado) {
			next()
		} else {
			next('/ingreso')
		}
	} else {
		next()
	}
})

export default router

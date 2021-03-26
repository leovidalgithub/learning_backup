import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
	{
		path: '/registro',
		name: 'Registro',
		component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
	},
	{
		path: '/',
		name: 'Inicio',
		component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/acceso',
		name: 'Acceso',
		component: () => import(/* webpackChunkName: "acceso" */ '../views/Acceso.vue')
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/agregar',
		name: 'Agregar',
		component: () => import(/* webpackChunkName: "agregar" */ '../views/Agregar.vue'),
		meta: { requiresAuth: true }
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		const user = auth.currentUser;
		if (!user) {
			next( {path: '/acceso'} )
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router

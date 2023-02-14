import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'
import Grid from '../views/Grid.vue'
import Cards from '../views/Cards.vue'
import FormValidator from '../views/FormValidator.vue'
import FormValidator2 from '../views/FormValidator2.vue'
import Calendar from '../views/Calendar.vue'

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
	},
	{
		path: '/grid',
		name: 'Grid',
		component: Grid
	},
	{
		path: '/cards',
		name: 'Cards',
		component: Cards
	},
	{
		path: '/formvalidator',
		name: 'FormValidator',
		component: FormValidator
	},
	{
		path: '/formvalidator2',
		name: 'FormValidator2',
		component: FormValidator2
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: Calendar
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

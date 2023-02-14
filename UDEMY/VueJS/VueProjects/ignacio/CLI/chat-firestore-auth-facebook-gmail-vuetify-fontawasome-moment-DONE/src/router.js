import Vue from 'vue'
import Router from 'vue-router'
import { auth } from "@/firebase";

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
		meta: {requiresAuth: true}
		},
		{
		path: '/ingreso',
		name: 'Ingreso',
		component: () => import(/* webpackChunkName: "ingreso" */ './views/Ingreso.vue')
		},
		{
		path: '/admin',
		name: 'Admin',
		component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
		meta: {requiresAuth: true}
		},
		{
		path: '/chat',
		name: 'Chat',
		component: () => import(/* webpackChunkName: "chat" */ './views/Chat.vue'),
		meta: {requiresAuth: true}
		}
	]
})

router.beforeEach((to, from, next) => {

	const user = auth.currentUser;

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (user) {
		next();
		} else {
		next({name:'Ingreso'});
		}
	} else {
		next() // make sure to always call next()
	}
})

export default router;

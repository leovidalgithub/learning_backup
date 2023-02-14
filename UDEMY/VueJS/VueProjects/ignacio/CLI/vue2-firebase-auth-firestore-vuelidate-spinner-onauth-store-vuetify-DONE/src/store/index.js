import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '../firebase'
import router from '../router'
import { getTimeOut } from '@/util'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null,
		error: null,
		tareas: [],
		tarea: {nombre: '', id: ''},
		carga: false,
		search: '',
// ------------------------ -------------------------------------
		loading: {
			titulo: '',
			estado: false,
			color: 'primary'
		}
	},
	mutations: {
		mostrarLoading(state, payload) {
			state.loading.titulo = payload.titulo
			state.loading.color = payload.color
			state.loading.estado = true
		},
		ocultarLoading(state) {
			state.loading.estado = false
		},
// ------------------------ -------------------------------------

		setUser(state, payload) {
			state.user = payload
		},
		setError(state, payload) {
			state.error = payload.code
		},
		setTareas(state, payload) {
			state.tareas = payload
		},
		setTarea(state, payload) {
			state.tarea = payload
		},
		setEliminarTarea(state, payload){
			state.tareas = state.tareas.filter(item => item.id !== payload)
		},
		cargarFirebase(state, payload) {
			state.carga = payload
		},
		setSearch(state, payload) {
			state.search = payload
		}
	},
	actions: {
		setSearch({commit}, search) {
			commit('setSearch', search)
		},
		agregarTarea({commit, state}, nombreTarea) {
			commit('cargarFirebase', true);
			db.collection(state.user.email).add({
				nombre: nombreTarea
			})
			.then(doc => {
				router.push({name: 'Inicio'})
			})
			.catch(e => console.log('agregarTarea error', e))
		},
		eliminarTarea({commit, state}, id){
			db.collection(state.user.email).doc(id).delete()
			.then(() => {
				commit('setEliminarTarea', id)
			})
			.catch(e => console.log('eliminar tarea', e))
		},
		getTarea({commit, state}, id) {
			commit('cargarFirebase', true);
			db.collection(state.user.email).doc(id).get()
			.then(doc => {
				let tarea = doc.data()
				tarea.id = doc.id
				commit('setTarea', tarea)
			})
			.catch(e => console.log('getTarea error', e))
			.finally(() => getTimeOut(commit))
		},
		editarTarea({commit, state}, tarea) {
			db.collection(state.user.email).doc(tarea.id).update({
				nombre: tarea.nombre
			})
			.then(() => {
				router.push({name: 'Inicio'})
			})
			.catch(e => console.log('editarTarea error', e))
		},
		getTareas({commit, state}) {
			commit('cargarFirebase', true);
			const tareas = [];
			db.collection(state.user.email).get()
				.then(res => {
					res.forEach(doc => {
						let tarea = doc.data();
						tarea.id = doc.id;
						tareas.push(tarea);
					})
					commit('setTareas', tareas);
				})
				.catch(e => console.log('getTareas error', e))
				.finally(() => getTimeOut(commit))
		},
		registerNewUser({commit}, {email, password}) {
			auth.createUserWithEmailAndPassword(email, password)
				.then(res => {
					// const {email, uid} = res.user;
					// commit('setUser', {email, uid})
					router.push('/');
				})
				.catch(e => {
					console.log('registerNewUser error', e);
					commit('setError', e);
				})
		},
		signInUser({commit}, {email, password}) {
			auth.signInWithEmailAndPassword(email, password)
				.then(res => {
					// const {email, uid} = res.user;
					// commit('setUser', {email, uid})
					router.push('/')
				})
				.catch(e => {
					console.log('signIn error', e);
					commit('setError', e);
				})
		},
		signOut({commit}) {
			auth.signOut()
				.then(() => {
					router.push('/acceso')
				})
		},
		setUser({commit}, user) {
			commit('setUser', user)
		}
	},
	getters: {
		existUser(state) {
			if(state.user === null) {
				return false
			} else {
				return true
			}
		},
		tareasFiltradas(state) {
			const tareasFiltradas = state.tareas.filter(item => {
				return item.nombre.toLowerCase().includes(state.search.toLowerCase())
			})
			return tareasFiltradas
		}
	},
	modules: {
	}
})
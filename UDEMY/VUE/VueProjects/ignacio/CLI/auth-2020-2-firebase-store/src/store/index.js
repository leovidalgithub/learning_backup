import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null,
		error: null,
		tareas: [],
		tarea: { nombre: '', id: ''}
	},
	mutations: {
		setUser(state, payload) {
			if(payload) {
				state.user = {
					email: payload.email,
					uid: payload.uid
				}
			} else {
				state.user = null
			}
		},
		setError(state, payload) {
			state.error = payload
		},
		setTareas(state, payload) {
			state.tareas = payload
		},
		setTarea(state, payload) {
			state.tarea = payload
		},
		setEliminarTarea(state, payload){
			state.tareas = state.tareas.filter(item => item.id !== payload)
		}
	},
	actions: {
		agregarTarea({commit, state}, nombreTarea){
			db.collection(state.user.email).add({
				nombre: nombreTarea
			})
			.then(doc => {
				router.push({name: 'Inicio'})
			})
			.catch(error => console.log(error))
		},
		eliminarTarea({commit, state}, id){
			db.collection(state.user.email).doc(id).delete()
			.then(() => {
				commit('setEliminarTarea', id)
			})
			.catch(e => console.log('eliminar tarea', e))
		},
		getTarea({commit, state}, id) {
			db.collection(state.user.email).doc(id).get()
			.then(doc => {
				let tarea = doc.data()
				tarea.id = doc.id
				commit('setTarea', tarea)
			})
			.catch(error => console.log(error))
		},
		editarTarea({commit, state}, tarea) {
			db.collection(state.user.email).doc(tarea.id).update({
				nombre: tarea.nombre
			})
			.then(() => {
				router.push({name: 'Inicio'})
			})
			.catch(error => console.log(error))
		},
		getTareas({commit, state}) {
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
		},
		registerNewUser({commit}, {email, password}) {
			auth.createUserWithEmailAndPassword(email, password)
				.then(res => {
					// const newUser = {email: res.user.email, uid: res.user.uid};
					// commit('setUser', newUser);

					db.collection(res.user.email).add({
						nombre: 'Tarea de Ejemplo'
					}).then(doc => {
						router.push('/');
					})

				})
				.catch(e => {
					console.log('registerNewUser error', e);
					commit('setError', e);
				})
		},
		signInUser({commit}, {email, password}) {
			auth.signInWithEmailAndPassword(email, password)
				.then(res => {
					// const signedInUser = {email: res.user.email, uid: res.user.uid};
					// commit('setUser', signedInUser);
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
		detectarUser({commit}, user) {
			commit('setUser', user)
		}
	},
	getters: {
		existUser(state) {
			if(state.user === null) {
				return false
			}
			return true
		}
	},
	modules: {
	}
})

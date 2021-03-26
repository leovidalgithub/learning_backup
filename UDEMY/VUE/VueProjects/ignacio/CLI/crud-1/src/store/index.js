import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tareas: [],
		tarea: {nombre: '', id: ''}
	},
	mutations: {
		setTareas(state, payload) {
			state.tareas = payload
		},
		setTarea(state, payload) {
			state.tarea = payload
		},
		removeTarea(state, id) {
			state.tareas = state.tareas.filter(item => item.id !== id)
		}
	},
	actions: {
		getTareas({commit}) {
			const tareas = [];
			db.collection('tareas').get()
				.then(res => {
					res.forEach(doc => {
						let tarea = doc.data()
						tarea.id = doc.id
						tareas.push(tarea)
					})
					commit('setTareas', tareas)
				})
		},
		getTarea({commit}, idTarea) {
			db.collection('tareas').doc(idTarea).get()
				.then(doc => {
					let tarea = doc.data();
					tarea.id = doc.id;
					commit('setTarea', tarea)
				})
		},
		editTarea({commit}, tarea) {
			db.collection('tareas').doc(tarea.id).update({
				nombre: tarea.nombre
			})
				.then(() => {
					router.push('/')
				})
		},
		addTarea({commit}, nombreTarea) {
			// db.collection('tareas').doc('id').set() // sending our own id
			db.collection('tareas').add({
				nombre: nombreTarea
			})
				.then(doc => {
					router.push('/')
				})
		},
		removeTarea({commit, dispatch}, idTarea) {
			db.collection('tareas').doc(idTarea).delete()
				.then(res => {
					//dispatch('getTareas')
					commit('removeTarea', idTarea)
				})
		}
	},
	modules: {
	}
})

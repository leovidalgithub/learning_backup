import { createStore } from 'vuex'
import router from '../router'

export default createStore({
state: {
	tareas: [],
	tarea: {
		id: '',
		nombre: '',
		categorias: [],
		estado: '',
		numero: 0
	}
},
mutations: {
	cargarLocalStorage(state, payload) {
		state.tareas = payload;
	},
	addTarea(state, payload) {
		state.tareas.push(payload);
		localStorage.setItem('tareas', JSON.stringify(state.tareas));
	},
	cleanTareaObj(state) {
		state.tarea = {
			id: '',
			nombre: '',
			categorias: [],
			estado: '',
			numero: 0
		}
	},
	deleteTarea(state, payload) {
		state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
		localStorage.setItem('tareas', JSON.stringify(state.tareas));
	},
	getTarea(state, payload) {
		if (!state.tareas.find(tarea => tarea.id === payload)) {
			router.push('/');
			return;
		}
		state.tarea = state.tareas.find(tarea => tarea.id === payload)
	},
	updateTarea(state, payload) {
		state.tareas = state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea);
		localStorage.setItem('tareas', JSON.stringify(state.tareas));
		router.push('/');
	}
},
actions: {
	cargarLocalStorage({commit}) {
		if (localStorage.getItem('tareas')) {
		const tareas = JSON.parse(localStorage.getItem('tareas'));
		commit('cargarLocalStorage', tareas);
		} else {
			localStorage.setItem('tareas', JSON.stringify([]))
		}
	},
	addTarea({commit}, tarea) {
		commit('addTarea', tarea)
	},
	cleanTareaObj({commit}) {
		commit('cleanTareaObj')
	},
	deleteTarea({commit}, id) {
		commit('deleteTarea', id)
	},
	getTarea({commit}, id) {
		commit('getTarea', id)
	},
	updateTarea({commit}, tarea) {
		commit('updateTarea', tarea)
	}
},
modules: {
}
})

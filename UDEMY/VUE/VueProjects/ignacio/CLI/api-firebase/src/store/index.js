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
		getFirebase(state, payload) {
			state.tareas = payload;
		},
		addTarea(state, payload) {
			state.tareas.push(payload);
			// localStorage.setItem('tareas', JSON.stringify(state.tareas));
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
			// localStorage.setItem('tareas', JSON.stringify(state.tareas));
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
			// localStorage.setItem('tareas', JSON.stringify(state.tareas));
			router.push('/');
		}
	},
	actions: {
		async getFirebase({commit}) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas.json`);
				const dataDB = await res.json();
				const arrayTareas = [];

				for (let id in dataDB) {
					arrayTareas.push(dataDB[id])
				}
				console.log(arrayTareas);
				commit('getFirebase', arrayTareas);
			} catch (error) {
				console.log(error);
			}
		},
		async addTarea({commit}, tarea) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json();
				console.log(dataDB);

				commit('addTarea', tarea)
			} catch (error) {
				console.log(error);
			}
		},
		cleanTareaObj({commit}) {
			commit('cleanTareaObj')
		},
		async deleteTarea({commit}, id) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${id}.json`, {
					method: 'DELETE'
				})
				const dataDB = await res.json();
				console.log(dataDB);
				commit('deleteTarea', id);
			} catch (error) {
				console.log(error);
			}

		},
		getTarea({commit}, id) {
			commit('getTarea', id)
		},
		async updateTarea({commit}, tarea) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
					method: 'PATCH',
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json();
				commit('updateTarea', tarea);
			} catch (error) {
				console.log(error);
			}
		}
	},
	modules: {
	}
})

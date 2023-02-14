import router from '../router'

export default {
	namespaced: true,
	state: {
		tareas: [],
		tarea: {
			id: '',
			nombre: '',
			categorias: {},
			estado: '',
			numero: 0
		}
	},
	mutations: {
		setTareas(state, tareas) {
			state.tareas = tareas;
		},
		getTarea(state, id) {
			if (!state.tareas.find(tarea => tarea.id === id)) {
				router.push('/');
				return;
			}
			state.tarea = state.tareas.find(tarea => tarea.id === id)
		},
		addTarea(state, tarea) {
			state.tareas.push(tarea);
		},
		updateTarea(state, updatedTarea) {
			state.tareas = state.tareas.map(tarea => tarea.id === updatedTarea.id ? updatedTarea : tarea);
			router.push('/');
		},
		deleteTarea(state, id) {
			state.tareas = state.tareas.filter(tarea => tarea.id !== id)
		},
		cleanTarea(state) {
			state.tarea = {
				id: '',
				nombre: '',
				categorias: {},
				estado: '',
				numero: 0
			}
		}
	},
	actions: {
		async setTareas({commit, state, rootState}) { // cargarLocalStorage
			try {
				const res = await fetch(
						`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${rootState.UserModule.user.localId}.json?auth=${rootState.UserModule.user.idToken}`);
				const dataDB = await res.json();
				if (dataDB === null) {
					commit('setTareas', []);
					return
				}
				const arrayTareas = [];
				for (let id in dataDB) {
					arrayTareas.push(dataDB[id])
				}
				commit('setTareas', arrayTareas);
			} catch (e) {
				console.log('setTareas error', e);
			}
		},
		async addTarea({commit, state, rootState}, tarea) {
			try {
				const res = await fetch(
						`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${rootState.UserModule.user.localId}/${tarea.id}.json?auth=${rootState.UserModule.user.idToken}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json();
				commit('addTarea', tarea)
			} catch (e) {
				console.log('add tarea error', e);
			}
		},
		cleanTarea({commit}) {
			commit('cleanTarea')
		},
		async deleteTarea({commit, state, rootState}, id) {
			try {
				const res = await fetch(
						`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${rootState.UserModule.user.localId}/${id}.json?auth=${rootState.UserModule.user.idToken}`, {
					method: 'DELETE'
				})
				const dataDB = await res.json();
				commit('deleteTarea', id);
			} catch (e) {
				console.log('delete tarea error', e);
			}
		},
		getTarea({commit}, id) {
			commit('getTarea', id)
		},
		async updateTarea({commit, state, rootState}, tarea) {
			try {
				const res = await fetch(
						`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${rootState.UserModule.user.localId}/${tarea.id}.json?auth=${rootState.UserModule.user.idToken}`, {
					method: 'PATCH',
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json();
				commit('updateTarea', tarea);
			} catch (e) {
				console.log('update tarea error', e);
			}
		},
		// someAction ({ dispatch, commit, getters, rootGetters }) {
		// 	getters.someGetter // -> 'foo/someGetter'
		// 	rootGetters.someGetter // -> 'someGetter'
		// 	rootGetters['bar/someGetter'] // -> 'bar/someGetter'

		// 	dispatch('someOtherAction') // -> 'foo/someOtherAction'
		// 	dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

		// 	commit('someMutation') // -> 'foo/someMutation'
		// 	commit('someMutation', null, { root: true }) // -> 'someMutation'
		// }
	},
	// getters: {
	// 	// `getters` is localized to this module's getters
	// 	// you can use rootGetters via 4th argument of getters
	// 	someGetter (state, getters, rootState, rootGetters) {
	// 	  getters.someOtherGetter // -> 'foo/someOtherGetter'
	// 	  rootGetters.someOtherGetter // -> 'someOtherGetter'
	// 	  rootGetters['bar/someOtherGetter'] // -> 'bar/someOtherGetter'
	// 	}
	// }
}
import { createStore } from 'vuex'
import router from '../router'
import register from '../handlers/register'

export default createStore({
	state: {
		tareas: [],
		tarea: {
			id: '',
			nombre: '',
			categorias: {},
			estado: '',
			numero: 0
		},
		user: null,
		error: {
			tipo: null,
			mensaje: null
		}
	},
	mutations: {
		setError(state, errMsg) {
			switch (errMsg) {
				case null:
					state.error = {tipo: null, mensaje: null}
					break;
				case 'EMAIL_NOT_FOUND':
					state.error = {tipo: 'email', mensaje: 'email no registrado'}
					break;
				case 'INVALID_PASSWORD':
					state.error = {tipo: 'password', mensaje: 'password incorrecto'}
					break;
				case 'INVALID_EMAIL':
					state.error = {tipo: 'email', mensaje: 'email invalid'}
					break;
				case 'EMAIL_EXISTS':
					state.error = {tipo: 'email', mensaje: 'email already exists'}
					break;
					default:
					state.error = {tipo: 'error', mensaje: 'error desconocido'}
			}
		},
		setUser(state, user) {
			state.user = user;
		},
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
		verificarUsuario({commit, state}) {
			if(!state.user) {
				if(sessionStorage.getItem('usuario')) {
					commit('setUser', JSON.parse(sessionStorage.getItem('usuario')));
				}
			}
		},
		cerrarSesion({commit}) {
			commit('setUser', null);
			commit('setTareas', []);
			router.push('/ingreso');
			sessionStorage.removeItem('usuario');
		},

		ingresoUsuario: async ({commit}, usuario) => register({commit}, usuario, false),

		registrarUsuario: async({commit}, usuario) => register({commit}, usuario, true),

		async setTareas({commit, state}) { // cargarLocalStorage
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`);
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
		async addTarea({commit, state}, tarea) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
		async deleteTarea({commit, state}, id) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
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
		async updateTarea({commit, state}, tarea) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
					method: 'PATCH',
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json();
				commit('updateTarea', tarea);
			} catch (e) {
				console.log('update tarea error', e);
			}
		}
	},
	modules: {
	},
	getters: {
		usuarioAutenticado(state) {
			return !!state.user
		},
		getErrorState(state) {
			return state.error
		}
	}
})

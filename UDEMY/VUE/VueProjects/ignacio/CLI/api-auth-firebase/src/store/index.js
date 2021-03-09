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
		},
		user: null
		// usuario: 'leito'
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
		},
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
		cerrarSesion({commit}) {
			commit('setUser', null);
			router.push('/ingreso');
		},
		async ingresoUsuario({commit}, usuario) {
			try {
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiURFQhj9jmJK1T8-zhzjiC-33AbtCljo', {
					method: 'POST',
					body: JSON.stringify({
						email: usuario.email,
						password: usuario.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json();
				if(userDB.error) {
					console.log('userDB error', userDB.error);
					return;
				}
				console.log('user', userDB);
				commit('setUser', userDB);
				router.push('/');
			} catch (error) {
				console.log('error', error);
			}
		},
		async registrarUsuario({commit}, usuario) {
			try {
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiURFQhj9jmJK1T8-zhzjiC-33AbtCljo', {
					method: 'POST',
					body: JSON.stringify({
						email: usuario.email,
						password: usuario.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json();
				if (userDB.error) {
					console.log('userDB error', userDB.error);
					return;
				}
				console.log('user', userDB);
				commit('setUser', userDB);
				router.push('/');
			} catch (error) {
				console.log(error)
			}
			console.log(usuario);
		},
		async getFirebase({commit, state}) { // cargarLocalStorage
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`);
				const dataDB = await res.json();
				if (dataDB.error) {
					return;
				}

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
				console.log(dataDB);

				commit('addTarea', tarea)
			} catch (error) {
				console.log(error);
			}
		},
		cleanTareaObj({commit}) {
			commit('cleanTareaObj')
		},
		async deleteTarea({commit, state}, id) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
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
		async updateTarea({commit, state}, tarea) {
			try {
				const res = await fetch(`https://udemy-api-cc1b4-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
	},
	getters: {
		usuarioAutenticado(state) {
			return !!state.user;
		}
	}
})

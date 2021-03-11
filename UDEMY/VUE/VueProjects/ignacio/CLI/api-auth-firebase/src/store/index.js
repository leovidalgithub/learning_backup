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
	},
	mutations: {
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
				categorias: [],
				estado: '',
				numero: 0
			}
		}
	},
	actions: {
		verificarUsuario({commit, state}) {
			if(!state.user) {
				if(localStorage.getItem('usuario')) {
					commit('setUser', JSON.parse(localStorage.getItem('usuario')));
				}
			}
		},
		cerrarSesion({commit}) {
			commit('setUser', null);
			router.push('/ingreso');
			localStorage.removeItem('usuario');
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
				commit('setUser', userDB);
				router.push('/');
				localStorage.setItem('usuario', JSON.stringify(userDB));
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
				commit('setUser', userDB);
				router.push('/');
				localStorage.setItem('usuario', JSON.stringify(userDB));
			} catch (error) {
				console.log(error)
			}
		},
		async setTareas({commit, state}) { // cargarLocalStorage
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
				commit('setTareas', arrayTareas);
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
				commit('addTarea', tarea)
			} catch (error) {
				console.log(error);
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
			return !!state.user
		}
	}
})

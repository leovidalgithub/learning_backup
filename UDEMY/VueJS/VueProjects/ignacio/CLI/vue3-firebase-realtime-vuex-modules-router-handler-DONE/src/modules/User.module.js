import router from '../router'
import register from '../handlers/register'

export default {
	namespaced: true,
	state: {
		user: null,
		error: {
			tipo: null,
			mensaje: null
		}
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
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
		cerrarSesion({commit, state, rootState}) {
			commit('setUser', null);
			commit('tareasModule/setTareas', [], {root:true});
			router.push('/ingreso');
			sessionStorage.removeItem('usuario');
		},
		ingresoUsuario: async ({commit}, usuario) => register({commit}, usuario, false),
		registrarUsuario: async({commit}, usuario) => register({commit}, usuario, true),
	},
	getters: {
		usuarioAutenticado(state) {
			return !!state.user
		},
		getErrorState(state) {
			return state.error
		}
	}
}
import Vue from 'vue'
import Vuex from 'vuex'

import {
	db,
	auth
} from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		usuario: null,
		userPhotos: {}
	},
	mutations: {
		setUsuario(state, payload) {
			state.usuario = payload;
		},
		setUsersPhotos(state, user) {
			Vue.set(state.userPhotos, user.uid, user.foto)
		}
	},
	actions: {
		async setUsuario({commit}, user) { // login or register
			try {
				const doc = await db.collection('usuarios').doc(user.uid).get();
				if (doc.exists) {
					commit('setUsuario', doc.data())
				} else {
					const usuario = {
						nombre: user.displayName,
						email: user.email,
						uid: user.uid,
						foto: user.photoURL
					}
					await db.collection('usuarios').doc(usuario.uid).set(
						usuario
					)
					commit('setUsuario', usuario)
				}
			} catch (e) {
				console.error(e);
			}
		},
		cerrarSesion({commit}) {
			auth.signOut()
			commit('setUsuario', null)
			router.push({
				name: 'Ingreso'
			})
		},
		async getUsersPhotos({commit, state}) {
			const users = db.collection('usuarios');
			const snapshot = await users.get();
			snapshot.forEach(doc => {
				if(doc.exists) {
					const user = doc.data();
					commit('setUsersPhotos', user)
				}
			});
		}
	},
	getters: {
		getuserPhotos: state => {
			return state.userPhotos;
		}
	}
})
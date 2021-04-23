import { createStore } from 'vuex'

export default createStore({
	state: {
		paises: [],
		paisesFiltrados: [],
		currentContinent: ''
	},
	mutations: {
		setPaises(state, payload) {
			state.paises = payload
		},
		setPaisesFiltrados(state, payload) {
			state.paisesFiltrados = payload
		}
	},
	actions: {
		async getPaises({commit}) {
			try {
				const res = await fetch('api.json');
				const paises = await res.json();
				commit('setPaises', paises);
			} catch (e) {
				console.log('getPaises error', e)
			}
		},
		filtrarRegion({commit, state}, regionCode) {
			state.currentContinent = regionCode;
			const filtro = state.paises.filter(pais => {
				return pais.region.toLowerCase().includes(regionCode)
			})
			commit('setPaisesFiltrados', filtro)
		},
		filtroNombre({commit, state}, texto) {
			const filtro = state.paises.filter(pais => {
				return pais.name.toLowerCase().includes(texto.toLowerCase())
			})
			commit('setPaisesFiltrados', filtro)
		}
	},
	getters: {
		topPaisesPoblacion(state) {
			return state.paisesFiltrados.sort((a, b) => {
				return a.population < b.population ? 1 : -1
			})
		}
	},
	modules: {
	}
})

import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 51,
    array: [33,2,1,5,3,7,9,12,43,65,78,11]
  },
  mutations: {
    incrementar(state, payload) {
      state.contador += payload
    },
    disminuir(state, payload) {
      state.contador -= payload
    }
  },
  actions: {
    accionIncrementar({commit}, numero) {
      commit('incrementar', numero)
    },
    accionDisminuir({commit}, numero) {
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    }
  },
  getters: {
    getArrayValues: state => {
      return state.array.filter(ele => ele > 10);
    }
  },
  modules: {
  }
})

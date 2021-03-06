import { createStore } from 'vuex'

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
    addTarea(state, payload) {
      state.tareas.push(payload);
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
        state.tareas.filter(tarea => tarea.id !== payload)
    }
  },
  actions: {
    addTarea({commit}, tarea) {
      commit('addTarea', tarea)
    },
    cleanTareaObj({commit}) {
      commit('cleanTareaObj')
    },
    deleteTarea({commit}, id) {
      commit('deleteTarea', id)
    }
  },
  modules: {
  }
})

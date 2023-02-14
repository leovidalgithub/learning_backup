import { createStore } from 'vuex'
import tareasModule from '../modules/Tareas.module'
import UserModule from '../modules/User.module'

export default createStore({
	state: {
		global_app_name: 'App Tareas'
	},
	mutations: {
	},
	actions: {
	},
	getters: {
	},
	modules: {
		tareasModule: tareasModule,
		UserModule: UserModule
	}
})

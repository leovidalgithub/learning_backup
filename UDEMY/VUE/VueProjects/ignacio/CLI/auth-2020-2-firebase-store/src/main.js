import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { auth } from './firebase'

auth.onAuthStateChanged(user => {
	// if (user) { }
	store.dispatch('detectarUser', user);

	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount('#app')
})



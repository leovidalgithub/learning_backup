import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import { auth } from './firebase'
// import vuetify from './plugins/vuetify';

auth.onAuthStateChanged(user => {
	if (user) {
		const {email, uid} = user;
		store.dispatch('setUser', {email, uid});
	} else {
		store.dispatch('setUser', null);
	}

	new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})



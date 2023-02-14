import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { auth } from "@/firebase";
import VueChatScroll from 'vue-chat-scroll'

// import { AUTH_SUCCESS, AUTH_LOGOUT } from "@/store/actions/auth";
// import { utils } from "@/store/modules/auth";

Vue.config.productionTip = false
Vue.use(VueChatScroll)

auth.onAuthStateChanged(function(user) {
	if (user) {
		// await store.dispatch(AUTH_SUCCESS, utils.mapUser(user))
		store.dispatch('setUsuario', user);
	} else {
		// store.dispatch(AUTH_LOGOUT);
	}
	new Vue({
		router,
		created() {
			if (!user) {
				this.$router.push("/ingreso");
			}
		},
		store,
		render: h => h(App)
	}).$mount('#app')
});






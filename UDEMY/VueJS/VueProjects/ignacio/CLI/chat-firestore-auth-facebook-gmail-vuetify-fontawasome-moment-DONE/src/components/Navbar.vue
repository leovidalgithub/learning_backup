<template>
	<nav>
		<v-toolbar class="amber amber darken-1" app>

			<v-toolbar-side-icon @click="drawer= !drawer"></v-toolbar-side-icon>

			<v-toolbar-title class="headline text-uppercase">
				<router-link :to="{name:'Home'}">
					<span class="white--text">Home</span>
				</router-link>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn @click="cerrarSesion">
				<span class="mr-2">Cerrar sesión</span>
				<v-icon>fas fa-address-book</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer class="amber amber darken-1" v-model="drawer" app>
			<v-layout column align-center mt-5>
				<v-flex>
					<v-avatar>
						<img :src="usuario.foto" :alt="usuario.nombre">
					</v-avatar>
				</v-flex>
				<v-flex>
					<p class="mt-3 white--text">{{ usuario.nombre }}</p>
				</v-flex>
			</v-layout>
			<v-divider></v-divider>
			<v-list>
				<v-list-tile v-for="(item, index) in items" :key="index" :to="item.to">
					<v-list-tile-action>
						<v-icon class="white--text">{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content class="white--text">{{ item.title }}</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>

	</nav>
</template>

<script>
	import { mapActions, mapState } from "vuex";

	export default {
		name: 'Navbar',
		data() {
			return {
				drawer: false,
				items: [
						{ title: 'Dashboard', icon: 'fas fa-address-card', to: {name: 'Home'} },
						{ title: 'Account', icon: 'fas fa-address-card', to: {name: 'Ingreso'} },
						{ title: 'Admin', icon: 'fas fa-address-card', to: {name: 'Admin'} },
						{ title: 'Chat', icon: 'fas fa-comments', to: {name: 'Chat'} }
				]
			}
		},
		methods:{
			...mapActions(['cerrarSesion'])
		},
		computed: {
			...mapState(['usuario'])
		},
	}
</script>

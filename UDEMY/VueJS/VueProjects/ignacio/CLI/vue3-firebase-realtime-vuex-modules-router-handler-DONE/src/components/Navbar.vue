<template>
	<div class="navbar navbar-dark bg-dark">
		<router-link to="/" class="navbar-brand">
			{{ global_app_name }}
		</router-link>
		<div class="d-flex">
			<router-link
				to="/"
				class="btn btn-dark"
				v-if="usuarioAutenticado"
			>
				Tareas
			</router-link>
			<router-link
				to="/about"
				class="btn btn-dark"
				v-if="usuarioAutenticado"
			>
				Parent Route
			</router-link>
			<router-link
				to="/ingreso"
				class="btn btn-dark"
				v-if="!usuarioAutenticado"
			>
				Login
			</router-link>
			<router-link
				to="/registro"
				class="btn btn-dark"
				v-if="!usuarioAutenticado"
			>
				Sign Up
			</router-link>
			<button
				@click="cerrarSesion"
				class="btn btn-dark"
				v-if="usuarioAutenticado"
			>Logout</button>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'

	export default {
		name: 'Navbar',
		computed: {
			...mapState(['global_app_name']),
			...mapGetters('UserModule', ['usuarioAutenticado'])
		},
		methods: {
			...mapActions('UserModule', ['cerrarSesion'])
		}
	}
</script>

<style scoped>
	.router-link-active {
		color: #7fd400;
		background-color: #23272b;
		border-color: #1d2124;
	}
</style>
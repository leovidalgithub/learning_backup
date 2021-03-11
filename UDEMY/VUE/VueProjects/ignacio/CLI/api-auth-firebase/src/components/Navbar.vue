<template>
	<div class="navbar navbar-dark bg-dark">
		<router-link to="/" class="navbar-brand">
			Formularios
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
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'Navbar',
		computed: {
			...mapGetters(['usuarioAutenticado'])
		},
		methods: {
			...mapActions(['cerrarSesion'])
		}
	}
</script>

<style scoped>
	.router-link-active {
		color: greenyellow;
		background-color: #23272b;
		border-color: #1d2124;
	}
</style>
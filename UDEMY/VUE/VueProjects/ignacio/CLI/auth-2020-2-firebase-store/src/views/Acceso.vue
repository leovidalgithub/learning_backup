<template>
	<div>
		<h1>Acceso de Usuarios</h1>
		<form @submit.prevent="signInUser(user)">
			<input
				class="form-control mb-2"
				type="email"
				placeholder="Ingrese email"
				v-model="user.email"
			>
			<input
				class="form-control mb-2"
				type="password"
				placeholder="Ingrese password"
				v-model="user.password"
			>
			<button class="btn btn-primary" type="submit">Acceder</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		name: 'Acceso',
		data() {
			return {
				user: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			...mapActions(['signInUser'])
		}
	}
</script>

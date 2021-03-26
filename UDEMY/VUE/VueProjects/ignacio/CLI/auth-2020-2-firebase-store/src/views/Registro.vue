<template>
	<div>
		<h1>Registro de Usuarios</h1>
		<form @submit.prevent="registerNewUser({email:email, password: pass1})">
			<input
				class="form-control mb-2"
				type="email"
				placeholder="Ingrese correo"
				v-model="email"
			>
			<input
				class="form-control mb-2"
				type="password"
				placeholder="Ingrese password"
				v-model="pass1"
			>
			<input
				class="form-control mb-2"
				type="password"
				placeholder="Repita password"
				v-model="pass2"
			>
			<button
				class="btn btn-primary"
				type="submit"
				:disabled="desactivate"
			>Registrar usuario</button>
			<p>{{ error }}</p>
		</form>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'

	export default {
		name: 'Registro',
		data() {
			return {
				email: '',
				pass1: '',
				pass2: ''
			}
		},
		methods: {
			...mapActions(['registerNewUser'])
		},
		computed: {
			...mapState(['error']),
			desactivate() {
				if(this.email.includes('@') &&
					this.pass1 === this.pass2 &&
					this.pass1.trim().length > 5) return false
				return true
			}
		}
	}
</script>

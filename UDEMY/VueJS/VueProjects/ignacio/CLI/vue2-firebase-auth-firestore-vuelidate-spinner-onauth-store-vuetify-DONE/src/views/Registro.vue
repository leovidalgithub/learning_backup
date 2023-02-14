<template>
	<div class="mt-4">
		<h1>Registro de Usuarios</h1>
		<form @submit.prevent="registerNewUser({email:email, password: pass1})" class="my-4">
			<input
				class="form-control mt-3"
				type="email"
				placeholder="Ingrese correo"
				v-model="email"
				ref="correo"
			>
			<input
				class="form-control mt-3"
				type="password"
				placeholder="Ingrese password"
				v-model="pass1"
			>
			<input
				class="form-control mt-3"
				type="password"
				placeholder="Repita password"
				v-model="pass2"
			>
			<small class="text-danger d-block" v-if="!$v.pass2.sameAsPassword">Passwords must be equal</small>
			<button
				class="btn btn-primary mt-4"
				type="submit"
				:disabled="desactivate"
			>Registrar usuario</button>
			<p>{{ error }}</p>
		</form>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import { sameAs } from 'vuelidate/lib/validators'

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
		},
		mounted () { // after render
			this.$refs.correo.focus();
		},
		validations: {
			pass2: {
				sameAsPassword: sameAs('pass1')
			}
		}
	}
</script>

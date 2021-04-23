<template>
	<h1 class="my-5">Registro de Usuarios</h1>
	<div class="alert alert-danger" v-if="getErrorState.tipo !== null">
		{{ getErrorState.mensaje }}
	</div>
	<form @submit.prevent="procesarFormulario">
		<input
			type="email"
			placeholder="email"
			class="form-control my-2"
			v-model.trim="email"
			:class="[getErrorState.tipo === 'email' ? 'is-invalid' : '']"
		>
		<input
			type="password"
			placeholder="password"
			class="form-control my-2"
			v-model.trim="pass1"
		>
		<input
			type="password"
			placeholder="repeat password"
			class="form-control my-2"
			v-model.trim="pass2"
		>
		<button
			type="submit"
			class="btn btn-primary"
			:disabled="bloquear"
		>
			Sign Up
		</button>
	</form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Registro',
	data() {
		return {
			email: '',
			pass1: '',
			pass2: ''
		}
	},
	computed: {
		...mapGetters('UserModule', ['getErrorState']),
		bloquear() {
			if(!this.email.includes('@'))
				return true;

			if(this.pass1.length > 5 && this.pass1 === this.pass2)
				return false;
			return true;
		}
	},
	methods: {
		...mapActions('UserModule', ['registrarUsuario']),
		async procesarFormulario() {
			await this.registrarUsuario({email: this.email, password: this.pass1})
			if (this.getErrorState.tipo !== null) {
				return
			}
			this.email = '';
			this.pass1 = '';
			this.pass2 = '';
		}
	},
}
</script>
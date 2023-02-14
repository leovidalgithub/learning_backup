<template>
<!-- NOTE: Ignacio said that he prefers use <input> rather than <b-form-input> 
		I just did some tests using both as well as state and class is-invalid -->
	<div class="my-4">
		<h1>Vuelidate</h1>
		<form @submit.prevent="submit">
			<b-form-input
				type="email"
				placeholder="Ingresa un email"
				class="form-control my-3"
				v-model.lazy="$v.correo.$model"
				:state="!$v.correo.$error"
			/>
			<small class="text-danger" v-if="!$v.correo.email">Email incorrecto</small>
			<small class="text-danger" v-if="!$v.correo.required">Campo requerido</small>
			<!-- <p>{{ $v.correo }}</p> -->

			<input type="password" placeholder="Ingresa clave" class="form-control my-3"
				v-model="$v.password.$model"
				:class="{'is-invalid': $v.password.$error}">
			<small class="text-danger" v-if="!$v.password.minLength">Min. 6 letras</small>
			<!-- {{$v.password}} -->

			<input type="password" placeholder="Repite clave" class="form-control my-3"
				v-model="$v.repeatPassword.$model"
				:class="{'is-invalid': $v.repeatPassword.$error}">
			<small class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Clave no coincide</small>
			<!-- {{$v.repeatPassword}} -->

			<b-button type="submit" variant="primary"
				:disabled="$v.$invalid">Enivar</b-button>

			<!-- <p>{{ $v }}</p> -->
		</form>
	</div>
</template>

<script>
	import { required, email, sameAs, minLength, between } from 'vuelidate/lib/validators'

	export default {
		name: 'FormValidator2',
		data() {
			return {
				correo: '',
				password: '',
				repeatPassword: ''
			}
		},
		validations: {
			correo: {required, email},
			password: {required, minLength: minLength(6)},
			repeatPassword: {sameAsPassword: sameAs('password')}
		},
		methods: {
			submit() {
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR'
					console.log('error');
				} else {
					this.submitStatus = 'PENDING'
					setTimeout(() => {
						console.log('Ok');
					this.submitStatus = 'OK'
					}, 1500)
				}
			}
		}
	}
</script>

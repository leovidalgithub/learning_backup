<template>
	<b-row class="my-5">
		<div class="col-12 col-sm-7 offset-sm-3 col-md-6">
			<h1>Acceso de Usuarios</h1>
			<form @submit.prevent="signInUser($v.user.$model)">
				<input
					class="form-control mt-3"
					type="email"
					placeholder="Ingrese email"
					v-model="$v.user.email.$model"
					:class="getInputEmailClass"
					ref="correo"
				>
				<small class="text-danger d-block" v-if="!$v.user.email.required">Required field</small>
				<small class="text-danger d-block" v-if="!$v.user.email.email">email incorrect</small>
				<input
					class="form-control mt-3"
					type="password"
					placeholder="Ingrese password"
					v-model="$v.user.password.$model"
					:class="{'is-invalid' : $v.user.password.$invalid,'is-valid' : !$v.user.password.$invalid}"
				>
				<small class="text-danger d-block" v-if="!$v.user.password.required">Required field</small>
				<small class="text-danger d-block" v-if="!$v.user.password.minLength">min. 6 letters</small>

				<button class="btn btn-primary mt-3" type="submit" :disabled="$v.user.$invalid">Login</button>
			</form>
			<p class="text-danger mt-3" v-if="error ===  'auth/user-not-found'">email invalid</p>
			<p class="text-danger mt-3" v-if="error ===  'auth/wrong-password'">password invalid</p>
		</div>
	</b-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

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
		// created () { // after component created and before render
		// },
		// updated () { // after DOM changes
		// },
		mounted () { // after render
			this.$refs.correo.focus();
		},
		computed: {
			...mapState(['error']),
			getInputEmailClass() {
				if (this.$v.user.email.$dirty) {
					if (this.$v.user.email.$invalid) {
						return 'is-invalid'
					} else {
						return 'is-valid'
					}
				}
			}
		},
		methods: {
			...mapActions(['signInUser'])
		},
		validations: {
			user: {
				email: { required, email },
				password: { required, minLength: minLength(6) }
			}
		}
	}
</script>

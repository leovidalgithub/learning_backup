<template>
	<div class="my-4">
		<h1>Agregar Tarea</h1>
		<form @submit.prevent="agregarTarea($v.nombre.$model)" class="form-inline mt-4">
			<input
				class="form-control mr-2 mb-2"
				type="text"
				placeholder="Ingrese tarea"
				v-model="$v.nombre.$model"
				ref="element"
				style="width:80%;"
			/>
			<button class="btn btn-primary mb-2" type="submit"
					:disabled="$v.nombre.$invalid || carga">Agregar</button>
			<small class="text-danger ml-3" v-if="!$v.nombre.required">Required field</small>
			<small class="text-danger ml-3" v-if="!$v.nombre.minLength">Min. 5 letters</small>
		</form>
		<div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import { required, minLength } from 'vuelidate/lib/validators'

	export default {
		name: 'Agregar',
		data() {
			return {
				nombre: ''
			}
		},
		mounted () {
			this.$refs.element.focus();
		},
		methods:{
			...mapActions(['agregarTarea'])
		},
		computed: {
			...mapState(['carga'])
		},
		validations: {
			nombre: {
				required,
				minLength: minLength(5)
			}
		}
	}
</script>
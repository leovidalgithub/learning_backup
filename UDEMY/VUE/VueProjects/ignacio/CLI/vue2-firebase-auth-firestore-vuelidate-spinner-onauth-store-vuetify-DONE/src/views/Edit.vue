<template>
	<div class="my-4">
		<h1>Editar</h1>
		<form @submit.prevent="editarTarea(tarea)" class="my-3">
			<input class="form-control mb-2" type="text" ref="search" v-model="$v.tarea.nombre.$model">
			<button class="btn btn-primary my-3" :disabled="$v.tarea.nombre.$invalid">Save</button>
		</form>
		<small class="text-danger d-block" v-if="!$v.tarea.nombre.required">Required field</small>
		<!-- {{$v.tarea.nombre}} -->
		<Spinner></Spinner>

	</div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	import Spinner from '../components/Spinner'
	import { required, minLength } from 'vuelidate/lib/validators'

	export default {
		name: 'Editar',
		components: {
			Spinner
		},
		data() {
			return {
				id: this.$route.params.id
			}
		},
		created() {
			this.getTarea(this.id)
		},
		mounted () { // after render
			this.$refs.search.focus();
		},
		methods: {
			...mapActions(['getTarea', 'editarTarea']),
		},
		computed: {
			...mapState(['tarea', 'carga'])
		},
		validations: {
			tarea: {
				nombre: { required }
			}
		}
	}
</script>
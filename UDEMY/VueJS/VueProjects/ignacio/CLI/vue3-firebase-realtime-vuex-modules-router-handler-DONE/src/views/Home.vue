<template>
	<form @submit.prevent="procesarFormulario" class="my-4">
		<inputdata :tarea="tarea" />
	</form>
	<hr>
	<lista-tareas :tareas="tareas" />
	<hr>
</template>

<script>
	import Inputdata from '../components/Inputdata'
	import ListaTareas from '../components/ListaTareas'
	import { mapState, mapActions } from 'vuex'
	const nanoid = require('nanoid')

	export default {
		name: 'Home',
		components: {
			Inputdata,
			ListaTareas
		},
		data() {
			return {
				}
		},
		computed: {
			...mapState('tareasModule', ['tarea', 'tareas'])
		},
		methods: {
			...mapActions('tareasModule', ['addTarea', 'cleanTarea', 'setTareas']),
			procesarFormulario() {
				// generar id
				this.tarea.id = nanoid();
				this.addTarea(this.tarea);
				// cleaning tarea obj
				this.cleanTarea();
			}
		},
		created () {
			this.cleanTarea();
			this.setTareas(); // cargarLocalStorage
		}
	}
</script>

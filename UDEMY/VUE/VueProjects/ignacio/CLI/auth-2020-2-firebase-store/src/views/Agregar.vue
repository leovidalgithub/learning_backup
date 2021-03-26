<template>
	<div>
		<h1>Agregar</h1>
		<form @submit.prevent="agregarTarea(nombre)">
			<input
				class="form-control mb-2"
				type="text"
				v-model="nombre"
				placeholder="Ingrese tarea"
			>
			<button class="btn btn-primary" type="submit">Agregar</button>
		</form>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Agregar',
		data() {
			return {
				nombre: ''
			}
		},
		methods:{
			...mapActions(['agregarTarea'])
		}
	}
</script>
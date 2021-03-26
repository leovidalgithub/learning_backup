<template>
	<div>
		<h1>Agregar Tarea</h1>
		<form class="form-inline" @submit.prevent="addTarea(nombre)">
			<div class="input-group mb-2 mr-sm-2">
				<div class="input-group-prepend">
					<div class="input-group-text">Nombre</div>
				</div>
				<input type="text" class="form-control" v-model="nombre">
			</div>
			<button type="submit" class="btn btn-primary mb-2">Agregar</button>
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
		methods: {
			...mapActions(['addTarea'])
		}
	}
</script>

<style>

</style>
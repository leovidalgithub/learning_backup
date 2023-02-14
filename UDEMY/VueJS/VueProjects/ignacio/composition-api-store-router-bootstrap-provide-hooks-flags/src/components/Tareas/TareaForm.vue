<template>
	<form @submit.prevent="agregarTarea">
		<input
			type="text"
			placeholder="Ingrese Tarea"
			class="form-control my-2"
			v-model.trim="texto"
		>
		<button class="btn btn-primary w-100" type="submit">Agregar</button>
	</form>
</template>

<script>
import { inject, ref } from 'vue'
	export default {
		name: 'TareaForm',

		setup() {
			const tareas = inject('tareas');
			const texto = ref('');

			const agregarTarea = () => {
				if(texto.value === '') return;
				const tarea = {
					texto: texto.value,
					estado: false,
					id: Date.now()
				}
				tareas.value.push(tarea);
				texto.value = '';
			}

			return { texto, agregarTarea}
		}
	}
</script>

<style>

</style>
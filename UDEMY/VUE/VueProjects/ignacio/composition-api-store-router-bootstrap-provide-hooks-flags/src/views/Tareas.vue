<template>
	<div class="row">
		<div class="col-12 col-lg-7 offset-lg-2">
			<tarea-form />
			<tarea-item
				v-for="tarea in tareas" :key="tarea.id"
				:tarea="tarea"
				@tareaEvent="tareaEvent"
			>
			</tarea-item>

			<div v-if="tareas.length === 0" class="alert alert-dark mt-3">
				Sin Tareas Pendientes😊
			</div>
		</div>
	</div>
</template>

<script>
	import { onBeforeMount, provide, ref, watchEffect } from 'vue'
	import TareaForm from '../components/Tareas/TareaForm'
	import TareaItem from '../components/Tareas/TareaItem'

	export default {
		nane: 'Tareas',
		components: {
			TareaForm, TareaItem
		},
		setup() {
			const tareas = ref([]);
			const count = ref(0);

			provide('tareas', tareas);

			if (localStorage.getItem('tareas')) {
				tareas.value = JSON.parse(localStorage.getItem('tareas'))
			}

			watchEffect(() => { // watch all variables
				console.log('watchEffect triggered - count = ', count.value);
				localStorage.setItem('tareas', JSON.stringify(tareas.value))
			})

			setInterval(() => {
				count.value++;
			}, 3000);

			const tareaEvent = (data) => {
				if (data.eventName === 'toggleStatus') {
					tareas.value.map(tarea => {
						if(tarea.id === data.id) tarea.estado = !tarea.estado
					})
				} else { // removeTarea
					tareas.value = tareas.value.filter(tarea => tarea.id !== data.id)
				}
			}
			return { tareas, tareaEvent }
		}
	}
</script>

<template>
	<TareaForm></TareaForm>
	<TareaItem
		v-for="tarea in tareas" :key="tarea.id"
		:tarea="tarea"
		@tareaEvent="tareaEvent"
	></TareaItem>

	<div
		v-if="tareas.length === 0"
		class="alert alert-dark mt-3"
	>
		Sin Tareas Pendientes😊
	</div>
</template>

<script>
import { onBeforeMount, provide, ref, watchEffect } from 'vue'
import TareaForm from './TareaForm'
import TareaItem from './TareaItem'

	export default {
		nane: 'TareaApp',
		components: {
			TareaForm, TareaItem
		},
		setup() {
			const tareas = ref([]);
			provide('tareas', tareas);

			if (localStorage.getItem('tareas')) {
				tareas.value = JSON.parse(localStorage.getItem('tareas'))
			}

			watchEffect(() => {
				localStorage.setItem('tareas', JSON.stringify(tareas.value))
			})

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

<template>
	<div class="alert alert-primary my-3 d-flex justify-content-between align-items-center" :class="tareaStatus">
		<p class="m-0" :class="{tachado: tarea.estado}">{{ tarea.texto }}</p>
		<div>
			<i @click="tareaEvent('toggleStatus', tarea.id)"
				v-if="tarea.estado"
				class="fas fa-undo-alt mx-2 text-primary"
				role="button">
			</i>
			<i @click="tareaEvent('toggleStatus', tarea.id)"
				v-else
				class="fas fa-check-circle mx-2 text-success"
				role="button">
			</i>
			<i @click="tareaEvent('removeTarea', tarea.id)"
				class="fas fa-minus-circle text-danger"
				role="button">
			</i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TareaItem',
		props: {
			tarea: {
				type: Object,
				default: {},
				required: true
			}
		},
		methods: {
			tareaEvent(eventName, id) {
				this.$emit('tareaEvent', {eventName: eventName, id: id})
			}
		},
		computed: {
			tareaStatus() {
				return this.tarea.estado ? 'alert-secondary' : ''
			}
		},
	}
</script>

<style scoped>
	.tachado {
		text-decoration: line-through;
	}
</style>
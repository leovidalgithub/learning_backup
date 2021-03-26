<template>
	<div>
		<h1>Editar</h1>
		<form class="form-inline" @submit.prevent="editTarea(tarea)">

		<div class="input-group mb-2 mr-sm-2">
			<div class="input-group-prepend">
				<div class="input-group-text">Nombre</div>
			</div>
			<input class="form-control" type="text" v-model="tarea.nombre">
		</div>
			<button class="btn btn-primary mb-2">Editar</button>
		</form>
	</div>

</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		name: 'Editar',
		data() {
			return {
				id: this.$route.params.id
			}
		},
		methods: {
			...mapActions(['getTarea', 'editTarea'])
		},
		created () {
			this.getTarea(this.id)
		},
		computed: {
			...mapState(['tarea'])
		}
	}
</script>

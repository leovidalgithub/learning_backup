<template>
	<div>
		<h1>Ruta protegida</h1>
		<router-link to='/agregar'>
			<button class="btn btn-primary mb-2">Agregar</button>
		</router-link>
		<ul class="list-group">
			<li class="list-group-item" v-for="item in tareas" :key="item.id">
				{{ item.id }} - {{ item.nombre }}
				<router-link
					:to="{name: 'Edit', params: {id: item.id}}"
					class="float-right ml-2"
				>
					<button class="btn btn-warning">Editar</button>
				</router-link>
				<button class="btn btn-danger float-right" @click="eliminarTarea(item.id)">Remove</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'

	export default {
		name: 'Inicio',
		computed: {
			...mapState(['user', 'tareas'])
		},
		methods: {
			...mapActions(['getTareas', 'eliminarTarea'])
		},
		created () {
			this.getTareas()
		}
	}
</script>

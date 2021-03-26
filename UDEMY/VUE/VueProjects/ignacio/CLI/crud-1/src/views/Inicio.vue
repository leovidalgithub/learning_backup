<template>
	<div>
		<h1>Lista de Tareas</h1>
		<router-link to="Agregar">
			<button class="btn btn-success btn-block">Agregar</button>
		</router-link>
		<ul class="list-group mt-5">
			<li class="list-group-item" v-for="item in tareas" :key="item.id">
				{{ item.nombre }} - {{ item.id }}
			<div class="float-right">
				<router-link
					:to="{name: 'Editar', params: {id: item.id}}"
					class="btn btn-warning btn-sm mr-2"
				>
					Editar
				</router-link>
				<button @click="removeTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
			</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'

	export default {
		name: 'Inicio',
		created () {
			this.getTareas()
		},
		methods: {
			...mapActions(['getTareas', 'removeTarea']),
		},
		computed: {
			...mapState(['tareas'])
		}
	}
</script>

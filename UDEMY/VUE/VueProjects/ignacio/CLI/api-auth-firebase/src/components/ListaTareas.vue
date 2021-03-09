<template>
	<table class="table table-responsive">
		<thead>
			<tr>
				<th scope="col">id</th>
				<th scope="col">Nombre</th>
				<th scope="col">Cats</th>
				<th scope="col">Estado</th>
				<th scope="col">Numero</th>
				<th colspan="2" class="text-center">Acciones</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in tareas" :key="item.id">
				<th scope="row">{{ item.id.substr(item.id.length -5) }}</th>
				<td>{{ item.nombre }}</td>
				<td>{{ typeof item.categorias !== 'undefined' ? item.categorias.join(', ') : '' }}</td>
				<td>{{ item.estado }}</td>
				<td>{{ item.numero }}</td>
				<td>
					<button @click="deleteTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
					<router-link
									class="btn btn-warning ml-2 btn-sm"
									:to="{
										name: 'Edit',
										params: {
											id: item.id
										}
									}"
					>
						Editar
					</router-link>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'ListaTareas',
		props: {
			tareas: {
				type: Array,
				default: []
			},
		},
		computed: {
			name() {
				return this.data
			}
		},
		watch: {
			tareas: function(newValue, oldValue) {
			}
		},
		methods: {
			...mapActions(['deleteTarea'])
		}
	}
</script>

<style>
	.btn {
		margin: 3px auto;
	}
</style>
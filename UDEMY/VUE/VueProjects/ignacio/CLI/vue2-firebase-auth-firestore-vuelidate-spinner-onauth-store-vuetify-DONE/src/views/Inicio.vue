<template>
	<div class="my-4">
		<h1>Lista de Tareas</h1>
		<router-link to='/agregar'>
			<b-button class="form-control">Agregar (F2 key)</b-button>
		</router-link>

		<form>
			<input type="text" placeholder="Buscar"
					class="form-control my-3" v-model="searchText"
					v-on:keyup="inputsearchchanged" ref="element">
		</form>

		<spinner />

		<ul class="list-group mt-4" v-if="!carga">
			<li class="list-group-item" v-for="item in tareasFiltradas" :key="item.id">
				<div class="row">
					<div :title="item.id" class="col-12 col-md-8">{{ item.nombre }}</div>
					<div class="col-12 col-md-4 text-center mt-4 mt-md-0">
						<router-link
							:to="{name: 'Edit', params: {id: item.id}}"
							class="mr-2"
						>
							<button class="btn btn-warning">Editar</button>
						</router-link>
						<button class="btn btn-danger" @click="eliminarTarea(item.id)">Remove</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'
	import Spinner from '../components/Spinner'
	import router from '../router'

	export default {
		name: 'Inicio',
		data() {
			return {
				searchText: ''
			}
		},
		components: {
			Spinner
		},
		mounted () {
			this.$refs.element.focus();
			document.addEventListener ("keydown", this.keydownpress, true);
		},
		beforeDestroy () {
			document.removeEventListener("keydown", this.keydownpress, true);
		},
		computed: {
			...mapState(['user', 'carga']),
			...mapGetters(['tareasFiltradas'])
		},
		methods: {
			...mapActions(['getTareas', 'eliminarTarea', 'setSearch']),
			inputsearchchanged: _.debounce(function(e) {
				this.setSearch(this.searchText)
			}, 500),
			keydownpress(zEvent) {
				if(zEvent.code === "F2") {
					router.push({name: 'Agregar'})
				}
			}
		},
		created () {
			this.getTareas()
		}
	}
</script>

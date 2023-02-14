<template>
	<div class="container mb-5">
		<h2>Editar Tarea</h2>
		<form @submit.prevent="editarTarea(tarea)">
			<input type="text" class="form-control mb-2" v-model="tarea.nombre">
			<b-button class="btn-warning" type="submit">Editar</b-button>
		</form>
		{{this.$route.params.id}}
	</div>
</template>

<script>
	import { db } from "@/plugins/firebase.js";
	import {mapState, mapActions} from 'vuex';

	export default {
		// this fetch belongs to nuxt and it is server-side
		fetch({store, params}) { // The Context is an object having app, store, route, params, query, error... etc
			return db.collection('tareas').doc(params.id).get()
				.then(doc => {
					if(doc.exists) {
						let tarea = doc.data();
						tarea.id = doc.id;
						store.commit('setTareaIndividual', tarea);
					}
				})
				.catch( e => {console.log(e)})
		},
		computed:{
			tarea:{
				get() {
					return {
						nombre: this.$store.state.tarea.nombre,
						id: this.$store.state.tarea.id
					}
				}
			}
		},
		methods:{
			...mapActions(['editarTarea'])
		},
		created () {
			// console.log('created client = ', process.client);
			// console.log('created server = ', process.server);
		},
		mounted () {
			// console.log('mounted client = ', process.client);
			// console.log('mounted server = ', process.server);
		}
	}
</script>

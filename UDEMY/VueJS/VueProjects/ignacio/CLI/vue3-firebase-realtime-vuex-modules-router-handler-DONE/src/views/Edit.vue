<template>
	<form @submit.prevent="updateTarea(tarea)">
		<Inputdata :tarea="tarea"></Inputdata>
	</form>
</template>

<script>
	import Inputdata from '../components/Inputdata'
	import { mapState, mapActions} from 'vuex'

	export default {
		name: 'Edit',
		components: {
			Inputdata
		},
		computed: {
			...mapState('tareasModule', ['tarea'])
		},
		methods: {
			...mapActions('tareasModule', ['getTarea', 'updateTarea']),
		},
		created () {
			this.getTarea(this.$route.params.id)
		}
	}
</script>

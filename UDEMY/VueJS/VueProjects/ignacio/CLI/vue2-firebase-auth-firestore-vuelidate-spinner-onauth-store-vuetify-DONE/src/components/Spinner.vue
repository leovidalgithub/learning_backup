<template>
	<div v-if="carga" class="text-center mt-5">
		<h3>Loading...</h3>
		<pulse-loader :loading="carga" color="#dc143c" size="1.4rem"></pulse-loader>
	</div>
</template>

<script>
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
	import { mapState } from 'vuex'

	export default {
		name: 'Spinner',
		components: {
			PulseLoader
		},
		computed: {
			...mapState(['carga'])
		}
	}
</script>

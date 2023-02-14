<template>
	<h4>Countries displayed = {{ paises.length }}</h4>
	<div class="row">
		<div
			class="col-12 col-sm-6 col-md-4 my-3"
			v-for="(pais, index) in paises" :key="index"
		>
			<flag-card :pais="pais" />
		</div>
	</div>
</template>

<script>
	import { computed, onMounted } from 'vue'
	import { mapState, useStore } from 'vuex'
	import FlagCard from './FlagCard'

	export default {
		name: 'FlagCardsList',
		components: {
			FlagCard
		},
		setup() {
			const store = useStore()

			const paises = computed(() => {
				return store.getters.topPaisesPoblacion
			})

			onMounted(() => {
				store.dispatch('filtrarRegion', '')
			})

			return { paises }
		}
	}
</script>

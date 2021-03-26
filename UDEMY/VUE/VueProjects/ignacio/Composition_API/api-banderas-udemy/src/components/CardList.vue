<template>
	<div class="row">
		<div
			class="col-12"
			v-for="(pais, index) in paises" :key="index"
		>
			<Card :pais="pais"></Card>
		</div>
	</div>
</template>

<script>
	import { computed, onMounted } from 'vue'
	import { mapState, useStore } from 'vuex'
	import Card from './Card'

	export default {
		name: 'CardList',
		components: {
			Card
		},
		setup() {
			const store = useStore()

			const paises = computed(() => {
				return store.getters.topPaisesPoblacion
			})

			// onMounted(() => {
			// 	store.dispatch('filtrarRegion', '')
			// })

			return { paises }
		}
	}
</script>

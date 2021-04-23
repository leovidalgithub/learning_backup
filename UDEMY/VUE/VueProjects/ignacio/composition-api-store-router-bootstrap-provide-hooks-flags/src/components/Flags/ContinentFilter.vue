<template>
	<div class="text-center filter-box py-3 my-2">
		<h3 class="text-center">Filter by continents</h3>
		<div class="btn-group mb-3">
			<button @click="filtrar('am')" class="btn btn-dark" :class="{active: currentContinent === 'am'}">AM</button>
			<button @click="filtrar('eu')" class="btn btn-dark" :class="{active: currentContinent === 'eu'}">EU</button>
			<button @click="filtrar('as')" class="btn btn-dark" :class="{active: currentContinent === 'as'}">AS</button>
			<button @click="filtrar('oc')" class="btn btn-dark" :class="{active: currentContinent === 'oc'}">OC</button>
			<button @click="filtrar('af')" class="btn btn-dark" :class="{active: currentContinent === 'af'}">AF</button>
			<button @click="filtrar('')" class="btn btn-dark" :class="{active: currentContinent === ''}">ALL</button>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState, useStore } from 'vuex'

	export default {
		name: 'Continents',
		computed: {
			...mapState(['currentContinent'])
		},
		setup() {
			const store = useStore();
			const filtrar = (region) => {
				store.dispatch('filtrarRegion', region)
			}
			return { filtrar }
		}
	}
</script>

<style scoped>
	.active {
		color: crimson;
	}
	.filter-box {
		border: 1px solid #f1f1f1;
	}
</style>
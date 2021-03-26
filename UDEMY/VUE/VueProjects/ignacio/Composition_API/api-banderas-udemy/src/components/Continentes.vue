<template>
	<div class="text-center">
		<h3 class="text-center">Filtrar por Continentes</h3>
		<div class="btn-group mb-3">
			<button @click="filtrar('am')" class="btn btn-dark">AM</button>
			<button @click="filtrar('eu')" class="btn btn-dark">EU</button>
			<button @click="filtrar('as')" class="btn btn-dark">AS</button>
			<button @click="filtrar('oc')" class="btn btn-dark">OC</button>
			<button @click="filtrar('af')" class="btn btn-dark">AF</button>
			<button @click="filtrar('')" class="btn btn-dark">ALL</button>
		</div>
	</div>
</template>

<script>
import { mapActions, useStore } from 'vuex'
	export default {
		name: 'Continentes',
		setup() {
			const store = useStore();
			const filtrar = (region) => {
				store.dispatch('filtrarRegion', region)
			}
			return { filtrar }
		}
	}
</script>

<style>

</style>
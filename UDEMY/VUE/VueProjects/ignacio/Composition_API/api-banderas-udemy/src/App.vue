<template>
	<div class="container">
		<h1 class="text-center" >Países API</h1>
		<Continentes></Continentes>
		<Buscador></Buscador>
		<CardList></CardList>
	</div>

	<!-- <div class="container box">container</div>
	<div class="container-sm box">container-sm</div>
	<div class="container-md box">container-md</div>
	<div class="container-lg box">container-lg</div>
	<div class="container-xl box">container-xl</div>
	<div class="container-fluid box">container-fluid</div> -->

</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import CardList from './components/CardList'
import Continentes from './components/Continentes'
import Buscador from './components/Buscador'

	export default {
		name: 'App',
		components: { CardList, Continentes, Buscador },

		setup() {
			const store = useStore()

			onMounted(async () => {
				await store.dispatch('getPaises')
				store.dispatch('filtrarRegion', '')
			})
		}
	}
</script>

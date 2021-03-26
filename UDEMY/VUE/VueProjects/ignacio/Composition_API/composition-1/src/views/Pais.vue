<template>
	<h1>Detalle de Pais {{ $route.params.nombre }}</h1>
	<h1>pais = {{ pais }}</h1>
	<hr>
	<p v-for="(detail, index) in arrayData" :key="index ">
		{{ detail.name }} - {{ detail.region }}
	</p>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { hookFecth } from '../hooks/hook-fetch'

	export default {
		name: 'Pais',
		props: {
			nombre: {
				type: String,
				default: ''
			},
		},
		created () {
			console.log('Different ways to get route params = ', this.$route.params.nombre);
		},
		setup(props, context) {

			const pais = ref('');

			onMounted(() => {
				console.log('Route Params as prop = ', props.nombre);
				const nombreParams = useRoute()
				console.log('Using useToute() = ', nombreParams.params.nombre);
				pais.value = nombreParams.params.nombre;
			})

			// const {arrayData} = hookFecth(`https://restcountries.eu/rest/v2/name/${props.nombre}`);
			// return {arrayData}

			return {...hookFecth(`https://restcountries.eu/rest/v2/name/${props.nombre}`), pais}
		}
	}
</script>

<style>

</style>
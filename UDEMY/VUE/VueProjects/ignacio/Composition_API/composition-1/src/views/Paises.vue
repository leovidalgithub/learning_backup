<template>
	<h1>Lista de Paises</h1>
	<p v-for="(pais, index) in arrayData" :key="index">
		<router-link
			:to="`/paises/${pais.name}`"
		>
			{{ pais.name }}
		</router-link>
	</p>
</template>

<script>
	import { hookFecth } from '../hooks/hook-fetch'

	export default {
		setup() {

			return {...hookFecth('api.json')}
		}

	}
</script>

<style>

</style>
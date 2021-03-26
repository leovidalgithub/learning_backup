<template>
	<h2>Contador: {{ contador }}</h2>
</template>

<script>
import { inject } from 'vue'
	export default {
		name: 'ContadorUno',
		setup() {
			const contador = inject('contador')

			return { contador }
		}
	}
</script>

<template>
	<button @click="disminuir">Disminuir</button>
	<button @click="contador++">Aumentar</button>
</template>

<script>
import { inject } from 'vue'
	export default {
		name: 'ContadorAccion',
		setup() {
			const contador = inject('contador')
			const disminuir = () => {
				contador.value--
			}

			return { contador, disminuir }
		}
	}
</script>

<template>
	<input
		type="text"
		placeholder="Ingrese país"
		class="form-control my-3"
		v-model="texto"
		@keyup="procesarInput"
	/>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

	export default {
		name: 'Buscador',
		setup() {
			const store = useStore()
			const texto = ref('')

			const procesarInput = _.debounce( () => {
				store.dispatch('filtroNombre', texto.value)
			}, 850)

			return { texto, procesarInput }
		}
	}
</script>

<style>

</style>
<template>
	<navbar />
	<div id="app" class="container">
		<router-view/>
	</div>
</template>

<script>
	import { onMounted } from 'vue'
	import { useStore } from 'vuex'
	import Navbar from './components/Navbar'

	export default {
		name: 'App',
		components: {
			Navbar
		},
		computed: {
		},
		setup() {
			const store = useStore()

			onMounted(async () => {
				await store.dispatch('getPaises')
				store.dispatch('filtrarRegion', '')
			})
		}
	}
</script>

<style lang="scss">
	html {
		font-size: 18px;
	}
	#app {
		text-align: center;
	}
</style>

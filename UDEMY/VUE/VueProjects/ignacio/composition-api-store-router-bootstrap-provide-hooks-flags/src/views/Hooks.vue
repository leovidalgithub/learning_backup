<template>
	<img alt="Vue logo" src="../assets/logo.png">
	<use-coordenates />
	<hello-world msg="Welcome to Your Vue.js App">
		<span>this is a SLOT content sent from Hooks.vue</span>
	</hello-world>
</template>

<script>
	import { provide } from 'vue'
	import HelloWorld from '../components/Hooks/HelloWorld.vue'
	import global from '@/hooks/global.hook'
	import UseCoordenates from '../components/Hooks/UseCoordenates.vue'

	export default {
		name: 'Hooks',
		components: {
			HelloWorld, UseCoordenates
		},
		setup() {
			provide('global', global)
			return {}
		}
	}
</script>

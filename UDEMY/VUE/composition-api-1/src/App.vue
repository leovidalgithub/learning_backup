<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<useCoordenates></useCoordenates>
	<HelloWorld msg="Welcome to Your Vue.js App">
		<span>SLOT content goes here</span>
	</HelloWorld>
</template>

<script>
	import { provide } from 'vue'
	import HelloWorld from './components/HelloWorld.vue'
	import global from '@/global'
	import useCoordenates from './components/useCoordenates'

	export default {
		name: 'App',
		components: {
			HelloWorld, useCoordenates
		},
		setup() {
			provide('global', global)
			return { global }
		}
	}
</script>

<style>
	html {
		font-size: 18px;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 10px;
	}
	img {
		width: 44px;
	}
	span {
		color: red;
	}
</style>

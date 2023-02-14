<template>
	<navbar />
	<div class="container">
		<router-view/>
	</div>
</template>

<script>
	import Navbar from './/components/Navbar'
	import { mapActions } from 'vuex'

	export default {
		name: 'App',
		components: {
			Navbar
		},
		methods: {
		...mapActions('UserModule', ['verificarUsuario'])
		},
		created () {
			this.verificarUsuario();
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		color: #ebebeb;
	}
	body {
		background-color: #c54861;
		height: 100vh;
	}
</style>
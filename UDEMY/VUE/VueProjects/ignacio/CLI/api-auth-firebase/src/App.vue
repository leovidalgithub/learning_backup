<template>
	<Navbar></Navbar>
	<div class="container">
		<router-view/>
	</div>
</template>

<script>
	import Navbar from './/components/Navbar'
	import { mapActions } from 'vuex'

	export default {
		components: {
			Navbar
		},
		methods: {
			...mapActions(['getFirebase'])
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
		background-color: darkcyan;
		height: 100vh;
	}
</style>
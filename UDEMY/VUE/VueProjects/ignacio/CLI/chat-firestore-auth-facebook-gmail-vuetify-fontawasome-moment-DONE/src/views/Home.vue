<template>
	<div>
		<h1>Hola</h1>
		<v-layout>
			<h3 v-if="usuario">Bienvenido {{usuario.nombre}}</h3>
		</v-layout>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Home',
		computed:{
			...mapState(['usuario'])
		}
	}
</script>

<style>
	div {
		background-color: #333;
	}
</style>
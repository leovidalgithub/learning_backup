<template>
	<v-layout>
		<h3 v-if="usuario">Bienvenido {{usuario.nombre}}</h3>
	</v-layout>
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

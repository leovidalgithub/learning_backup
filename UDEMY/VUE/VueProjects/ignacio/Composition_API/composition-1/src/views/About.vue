<template>
	<div class="about">
		<Titulo :contador="contador" :color="color">
			<HelloWorld msg="Hello World!"></HelloWorld>
			<p>slot content goes here</p>
		</Titulo>

		<Btn extraTextButton="YA" @accion="updateContador"></Btn>
		<hr>
		<input type="text" v-model="texto">
		<p>{{ texto }}</p>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import Titulo from '../components/Titulo'
	import HelloWorld from '../components/HelloWorld'
	import Btn from '../components/Btn'
	import { hookContador } from '../hooks/hook-contador'

	export default {
		components: {
			Titulo, HelloWorld, Btn
		},
		setup() {
			const texto = ref('');
			return {...hookContador(), texto}
		}
	}
</script>

<style lang="scss" scoped>
	.about {
		p {
			color: crimson;
			font-size: 21px;
			font-weight: 900;
		}
	}
</style>
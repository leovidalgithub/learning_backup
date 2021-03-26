<template>
		<h1 :style="{ color: color}" >Contador: {{ contador }}</h1>
		<Btn extraTextButton="!!!" @accion="updateContador"></Btn>
</template>

<script>
	import Btn from '../components/Btn'
	import { hookContador } from '../hooks/hook-contador'

	export default {
		name: 'Contador',
		components: {
			Btn
		},
		setup() {
			return {...hookContador()}
		}
	}
</script>

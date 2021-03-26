<template>

	<!-- <button @click="$emit('accion', {value: -1})">Disminuir{{ extraTextButton }}</button> -->

	<button @click="accionBotonHijo(-1)">Disminuir {{ extraTextButton }}</button>
	<button @click="accionBotonHijo(1)">Aumentar {{ extraTextButton }}</button>
</template>

<script>
export default {
	name: 'Btn',
	emits: ['accion'],
	props: {
		extraTextButton: {
			type: String,
			default: ''
		},
	},
	setup(props, context) {
		const accionBotonHijo = (value) => {
			context.emit('accion', {value: value})
		}

		return {accionBotonHijo}
	}

}
</script>

<style>

</style>
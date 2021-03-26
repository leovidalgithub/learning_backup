<template>
	<div class="container">
		<h1>Use Mouse Demo</h1>
		<p>x: {{ x }} | y: {{ y }}</p>
	</div>
</template>

<script>
	import useMousePosition from "@/coordenates";

	export default {
		name: 'useCoordenates',

		setup() {
			const { x, y } = useMousePosition();
			return { x, y };
		}
	}
</script>

<style scoped>
	.container {
		border: 1px solid crimson;
	}
</style>
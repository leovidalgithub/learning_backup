<template>
	<div>
		<h1>Use Mouse Demo</h1>
		<h4>x: {{ x }} | y: {{ y }}</h4>
	</div>
</template>

<script>
	import mouseCoordinates from "../../hooks/mouseCoordinates.hook";

	export default {
		name: 'useCoordenates',

		setup() {
			const { x, y } = mouseCoordinates();
			return { x, y };
		}
	}
</script>

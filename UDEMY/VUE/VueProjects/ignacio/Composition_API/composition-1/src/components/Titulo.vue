<template>
	<h1 :style="{'color': color}">Contador: {{ signoPeso }}</h1>
	<div class="slotito">
		<slot></slot>
	</div>
</template>

<script>
import { computed } from 'vue'
	export default {
		props: {
			contador: {
				type: Number,
				default: 0
			},
			color: {
				type: String
			}
		},
		// computed: {
		// 	signoPeso() {
		// 		return '$' + this.contador
		// 	}
		// }
		setup(props) {
			const signoPeso = computed(() => {
				return '$' + props.contador
			})

			return {signoPeso}
		}

	}
</script>

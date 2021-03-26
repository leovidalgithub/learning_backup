<template>
	<div class="home">
		<h1
			:style="{'color': color}"
		>
			Contador: {{ contador }}
		</h1>
		<button @click="disminuir">-</button>
		<button @click="aumentar">+</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contador: 0
			}
		},
		methods: {
			aumentar() {
				this.contador++;
			},
			disminuir() {
				this.contador--;
			}
		},
		computed: {
			color() {
				return this.contador < 0 ? 'red' : 'blue'
			}
		}
	}
</script>

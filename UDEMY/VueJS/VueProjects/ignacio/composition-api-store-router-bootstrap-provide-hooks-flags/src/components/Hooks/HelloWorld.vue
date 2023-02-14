<template>
	<div class="my-3">
		<h3>{{ msg }}</h3>
		<h1>Count: {{ global.state.count }}</h1>

		<div class="d-grid gap-2 px-5 mx-5 my-3">
			<button class="btn btn-outline-secondary" @click="global.increment">Increment</button>
			<button class="btn btn-outline-danger" @click="incrementar">Decrement</button>
		</div>
		<h3>{{ global.myrefvar.value }}</h3>
		<p class="my-3">{{ global.state.content }} --> length =  {{ global.state.wordCount }}
			<input type="text" v-model="global.state.content">
		</p>
		<slot></slot>
		<div class="my-3">
			<input @keydown.enter="keypressed" type="text" value="using @keydown.enter">
		</div>
	</div>
</template>

<script>
import { inject, onMounted } from 'vue'
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		setup(props, context) {
			const global = inject('global')
			const incrementar = () => {
				global.state.count--;
			}
			const keypressed = () => { alert('Key pressed')}

			onMounted(() => {
				// accessing the slot content, props (msg) content and also to use emit
				console.log(context.slots.default()[0].children);
				console.log(props.msg);
			})

			return { global, incrementar, keypressed }
		}
		// this way also works to inject
		// inject: ['global']
	}
</script>

<style scoped>
	h3 {
		background: crimson;
		color: white;
	}
	p {
		font-size: 1.3rem;
		margin: 5px auto;
	}
</style>

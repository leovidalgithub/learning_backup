<template>
	<section class="container">
		<div>
			<logo />
			<h1 class="title">
				udemy-1
			</h1>
			<h2 class="subtitle">
				My primo Nuxt.js project
			</h2>
			<div class="links">
				<a
					href="https://nuxtjs.org/"
					target="_blank"
					class="button--green"
				>
					Documentation
				</a>
				<a
					href="https://github.com/nuxt/nuxt.js"
					target="_blank"
					class="button--grey"
				>
					GitHub
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	import Logo from '~/components/Logo.vue'

	export default {
		components: {
			Logo
		},
		head:{
			title: 'Esta es mi página de inicio',
			meta: [
			{hid: 'description', name:'description', content: 'Esta es la descripción de mi página de inicio'}
			]
		}
	}
</script>

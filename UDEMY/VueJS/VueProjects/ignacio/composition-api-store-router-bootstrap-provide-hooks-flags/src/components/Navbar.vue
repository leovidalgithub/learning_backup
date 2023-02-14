<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
		<div class="container-fluid">
			<router-link class="navbar-brand" :to="'/'">Composition API</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" :to="'/flags'" active-class="active">Flags</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="'/tareas'" active-class="active">Tareas</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="'/hooks'" active-class="active">Hooks</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form class="d-flex" v-if="isCurrentRouteFlags">
					<input class="form-control me-3" type="search" placeholder="Start typing here..." aria-label="Search" v-model="texto"><!--@keyup="procesarInput"-->
				</form>
			</div>
		</div>
	</nav>
</template>

<script>
	import { ref, watchEffect } from 'vue'
	import { useStore } from 'vuex'

	export default {
		name: 'Navbar',
		computed: {
			isCurrentRouteFlags() {
				return this.$route.name === 'Flags';
			}
		},
		setup() {
			const store = useStore();
			const texto = ref('');

			const procesarInput = _.debounce( () => {
				store.dispatch('filtroNombre', texto.value)
			}, 850)

			watchEffect(() => { // watch all variables
				texto.value;
				procesarInput();
			})

			return { texto, procesarInput }
		}
	}
</script>

<style scoped>
	.active.router-link-exact-active {
		color: #91dc1e !important;
	}
</style>
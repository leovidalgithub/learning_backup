<template>
	<div id="app" class="container mt-2">
		<div >
			<router-link class="btn btn-dark mr-2" to="/" v-if="existUser">Inicio</router-link>
			<router-link class="btn btn-dark mr-2" to="/registro" v-if="!existUser">Registro</router-link>
			<router-link class="btn btn-dark mr-2" to="/acceso" v-if="!existUser">Acceso</router-link>
			<button class="btn btn-dark mr-2" @click="signOut" v-if="existUser">Logout</button>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		methods: {
			...mapActions(['signOut'])
		},
		computed: {
			...mapGetters(['existUser'])
		}
	}
</script>

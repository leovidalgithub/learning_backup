<template>
	<div id="app">
		<b-navbar toggleable="md" type="dark" variant="danger">
			<b-container>
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				<b-navbar-brand to="/">NavBar</b-navbar-brand>
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav>
						<b-nav-item to="/" v-if="existUser">Tareas</b-nav-item>
						<b-nav-item :to="{name: 'Grid'}" v-if="existUser">Grid</b-nav-item>
						<b-nav-item :to="{name: 'Cards'}" v-if="existUser">Cards</b-nav-item>
						<b-nav-item :to="{name: 'FormValidator'}" v-if="existUser">Form Validator</b-nav-item>
						<b-nav-item :to="{name: 'FormValidator2'}" v-if="existUser">Form Validator 2</b-nav-item>
						<b-nav-item :to="{name: 'Calendar'}" v-if="existUser">Calendar</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item @click="signOut" v-if="existUser" right>Logout</b-nav-item>
						<b-nav-item-dropdown text="Access" v-if="!existUser" right>
							<b-dropdown-item to="/registro">Registro</b-dropdown-item>
							<b-dropdown-item to="/acceso">Acceso</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>

		<b-container>
			<router-view/>
		</b-container>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'

	export default {
		methods: {
			...mapActions(['signOut']),
		},
		computed: {
			...mapGetters(['existUser']),
			...mapState(['user'])
		}
	}
</script>

<style>
	h1 {
		color: #666;
	}
</style>
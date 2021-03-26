<template>
	<div id="app">
		<b-navbar toggleable="md" type="dark" variant="danger">
			<b-container>
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				<b-navbar-brand href="#">NavBar</b-navbar-brand>
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav>
						<b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
						<b-nav-item :to="{name: 'About'}">About</b-nav-item>
						<b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>
						<b-nav-item :to="{name: 'Cards'}">Cards</b-nav-item>
						<b-nav-item :to="{name: 'Form'}">Form</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>

		<b-container>
			<router-view/>
		</b-container>


	</div>
</template>

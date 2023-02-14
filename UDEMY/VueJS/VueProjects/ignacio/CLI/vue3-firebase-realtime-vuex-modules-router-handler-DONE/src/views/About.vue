<template>
	<div class="my-3">
		<h1>Parent route About and my child Bar route</h1>
		<router-link class="btn btn-primary my-3" :to="'/about/bar'">BAR child route</router-link>
		<div class="bar my-3">
			<router-view></router-view>
		</div>
	</div>
</template>

<style scoped>
	.bar {
		border: crimson 1px dashed;
	}
</style>

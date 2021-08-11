<template>
	<div class="container">
		<h1 class="text-center" >Jim Burger's Flags App</h1>
		<continent-filter />
		<flag-cards-list />
	</div>
</template>

<script>
	import FlagCardsList from '../components/Flags/FlagCardsList'
	import ContinentFilter from '../components/Flags/ContinentFilter'

	export default {
		name: 'Flags',
		components: {
			FlagCardsList, ContinentFilter
		}
	}
</script>

<style scoped>
	.container {
		border: greenyellow 3px solid;
	}
</style>

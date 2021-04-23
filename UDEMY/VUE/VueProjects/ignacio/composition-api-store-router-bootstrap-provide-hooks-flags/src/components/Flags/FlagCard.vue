<template>
	<div class="card mb-2">
		<div class="card-body">
			<h5 class="card-title text-center">{{ pais.name }}</h5>
			<p>
				<img :src="pais.flag" :alt="`${pais.name}`" class="w-50">
			</p>
			<p class="card-text">
				<span class="badge bg-secondary d-block mb-1">Native Name : {{ pais.nativeName }}</span>
				<span class="badge bg-info p-3 d-block mb-1">Population : {{ populationFormat(pais.population) }}</span>
				<span class="badge bg-secondary d-block mb-1">Capital : {{ pais.capital }}</span>
				<span class="badge bg-secondary d-block">Region : {{ pais.region }}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FlagCard',
		props: {
			pais: {
				type: Object,
				default: {}
			},
		},
		setup(props) {
			const populationFormat = (num) => {
				return new Intl.NumberFormat("de-DE").format(num)
			}

			return { populationFormat }
		}
	}
</script>

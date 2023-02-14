<template>
	<div class="mt-4">
		<h1>Formularios</h1>
		<form class="mt-4">
			<b-row>
				<b-col md="3" class="my-4">
					<b-form-input type="text" v-model="text" :state="textName"></b-form-input>
					<small>At least 3 letters</small>
				</b-col>
				<b-col md="3" class="my-4">
					<b-form-select v-model="selected" :options="animales"></b-form-select>
					<small>{{ selected }}</small>
				</b-col>
				<b-col md="3" class="my-4 box-gray">
					<b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
					<small>{{ radio }}</small>
				</b-col>
				<b-col md="3" class="my-4 box-gray">
					<b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
					<small>{{ check }}</small>
				</b-col>
			</b-row>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'FormValidator',
		data() {
			return {
				text: '',
				selected: null,
				radio: null,
				check: [],
				animales: [
					{value: null, text: 'Seleccione un animal'},
					{value: 'perro', text: 'Gua gua'},
					{value: 'gato', text: 'Miua'},
					{value: 'pato', text: 'Cuack'}
				],
				animalesRadio: [
					{value: 'perro', text: 'Gua gua'},
					{value: 'gato', text: 'Miua'},
					{value: 'pato', text: 'Cuack'}
				]
			}
		},
		computed: {
			textName() {
				return this.text.length > 2 ? true : false;
			}
		},
	}
</script>

<style scoped>
	.box-gray {
		border: 1px solid #f1f1f1 !important;
		padding: 10px;
	}
</style>
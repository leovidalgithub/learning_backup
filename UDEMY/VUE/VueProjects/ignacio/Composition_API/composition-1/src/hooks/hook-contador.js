import { ref, computed } from 'vue'

const hookContador = () => {
	const contador = ref(0);
	const updateContador = (value) => contador.value += value.value;
	const color = computed(() => contador.value < 0 ? 'red' : 'orange');
	return {contador, updateContador, color}
}

export { hookContador }
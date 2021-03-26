import { computed, reactive, readonly, ref } from 'vue'

const state = reactive({
	count: 321,
	content: "Hello world",
	wordCount: computed(() => state.content.length)
})

const increment = function() {
	state.count++;
}

const myrefvar = ref('El que lea esto es rolo de marico')

export default { state, increment, myrefvar }
//export default { state: readonly(state), increment, myrefvar }
import { computed, reactive, readonly, ref } from 'vue'

const state = reactive({
	count: 321,
	content: "coming from a reactive obj trapped in a hook",
	wordCount: computed(() => state.content.length)
})

const increment = function() {
	state.count += 3;
}

const myrefvar = ref('This message comes from a hook called global.js using ref')

export default { state, increment, myrefvar }
//export default { state: readonly(state), increment, myrefvar }
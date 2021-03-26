import { onMounted, ref } from 'vue'

export function hookFecth(url) {

	const arrayData =  ref([]);

	onMounted(async () => {
		try {
			const res = await fetch(url)
			arrayData.value = await res.json()
		} catch (e) {
			console.log('fetchData error', e);
		}
	})

	return { arrayData }
}
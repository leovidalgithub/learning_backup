<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
	<button @click="send">CLICK ME</button>
	<hr>
	<div class="db-content">
		<ul>
			<li v-for="(item, index) in content" :key="index">
				{{item.ID}} - {{item.content_1}} - {{item.content_2}}
			</li>
		</ul>
	</div>
</template>

<script>

export default ({
	name: 'About',
	data() {
		return {
			content: []
		}
	},
	methods: {
		send() {
			fetch('http://localhost:3000/', {
				method: 'GET',
				// mode: 'no-cors', // It can be no-cors, cors, same-origin
				//credentials: 'same-origin', // It can be include, same-origin, omit
				headers: {
					'Content-Type': 'application/json', // Your headers
				},
				// body: JSON.stringify(data),
			}).then(res => {
				if (!res.ok) {
					console.log(res);
					throw Error(res.status)
				}
				return res.json()
			})
			.then(data => {
				console.log(data);
				this.content = data;
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
})
</script>

<style scoped>
	.db-content li {
		color: white;
		text-decoration: none;
		list-style: none;
		font-size: 23px;
	}
</style>

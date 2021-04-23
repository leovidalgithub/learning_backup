var vm = new Vue ({
	el: '#app',
	data: {
		idea_txt: '',
		prioridad: '',
		lista_ideas: [],
		search_txt: ''
	},
	computed: { // propiedad computada
	},
	watch: {
		search_txt: function(val) {
			this.buscarIdeas(val);
		}
	},
	methods: {
		agregarIdea: function() {
			var idea = {
				'id': this.lista_ideas.length,
				'idea': this.idea_txt,
				'prioridad': this.prioridad
			}
			this.lista_ideas.push(idea);
		},
		buscarIdeas: function(val) {
			let pepe = this.lista_ideas.filter(element => {
				return element.idea.includes(val)
			})
			this.lista_ideas = this.lista_ideas.filter(
				value => {
					return value.idea.toLowerCase().indexof(
						val.toLowerCase()
					) >= 0
				}
			)
		},
		eliminarIdea: function(idea_id) {
			let index = this.lista_ideas.findIndex(e => e.id === idea_id);
			this.lista_ideas.splice(index, 1);
		},
		cargarDatosServidor: function() {
			var self = this;
			axios.get('https://servicios.neunapp.com/api/tienda/categorias/lista/')
			.then (
				function(response) {
					console.log(response.data);
					// self.lista_ideas = response.data;
				}
			)
		}
	}
})

// vm.idea_txt = 'EPA'
vm.lista_ideas = [
	{'id': 0, 'idea': 'mi primera idea', 'prioridad': 'I'},
	{'id': 1, 'idea': 'mi segunda idea', 'prioridad': 'N'},
	{'id': 2, 'idea': 'mi tercera idea', 'prioridad': 'M'}
]

vm.cargarDatosServidor();
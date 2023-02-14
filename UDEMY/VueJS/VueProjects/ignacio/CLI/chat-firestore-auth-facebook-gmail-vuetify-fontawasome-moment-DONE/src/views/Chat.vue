<template>
	<v-layout>
		<v-flex xs12 sm10 offset-sm1 md8 offset-md2>
			<v-card v-if="usuario">
				<v-card-text>
					<h2>{{usuario.nombre}}</h2>
				</v-card-text>
				<v-card-text class="chat-box" v-chat-scroll="{smooth: true}">
					<div :class="item.nombre === usuario.nombre ? 'text-xs-right' : 'text-xs-left'"
						v-for="(item, index) in mensajes" :key="index"
					>
						<v-chip>
							<v-avatar>
								<img :src="getuserPhotos[item.uid]">
							</v-avatar>
							{{ item.mensaje }}
						</v-chip>
						<p class="caption mr-2">{{ formatDate(item.fecha) }}</p>
					</div>
				</v-card-text>

				<v-card-text>
					<v-form @submit.prevent="enviarMensaje" v-model="valido">
						<v-text-field
							v-model="mensaje"
							label="Escribe tu mensaje aquí"
							required
							:rules="reglas"
						>
						</v-text-field>
					</v-form>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex';
	import { db } from '@/firebase'
	import moment from 'moment'

	export default {
		name: 'Chat',
		data() {
			return {
				mensaje: '',
				valido: false,
				reglas: [
						v => !!v || 'Tienes que escribir un mensaje...'
				],
				mensajes: []
			}
		},
		computed: {
			...mapState(['usuario']),
			...mapGetters(['getuserPhotos'])
		},
		created () {
			moment.locale('es');

			let ref = db.collection('chats').orderBy('fecha', 'desc').limit(9)
			ref.onSnapshot(querySnapshot => {
				this.mensajes = [];
				querySnapshot.forEach(doc => {
					this.mensajes.unshift(doc.data())
				})
			})
		},
		mounted () {
			this.getUsersPhotos();
		},
		methods: {
			...mapActions(['getUsersPhotos']),
			formatDate(timestamp) {
				return moment(timestamp).format('lll')
			},
			enviarMensaje() {
				if (this.valido) {
					db.collection('chats').add({
						mensaje: this.mensaje,
						nombre: this.usuario.nombre,
						uid: this.usuario.uid,
						fecha: Date.now()
					}).catch(e => console.log(e));
					this.mensaje = '';
				}
			}
		}
	}
</script>

<style scoped>
	.chat-box {
		height: 60vh;
		overflow-y: auto;
	}
	h2 {
		font-family: monospace;
		color: crimson;
	}
</style>
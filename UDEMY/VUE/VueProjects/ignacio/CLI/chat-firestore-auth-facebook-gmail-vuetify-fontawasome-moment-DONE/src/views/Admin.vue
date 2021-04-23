<template>
	<v-layout justify-center>
		<v-flex xs6>
			<v-card class="text-xs-center" v-if="usuario">
				<v-card-text>
					<v-avatar>
						<img :src="usuario.foto" :alt="usuario.nombre">
					</v-avatar>
				</v-card-text>

				<v-card-text>
					<h3>{{ usuario.nombre }}</h3>
				</v-card-text>

				<v-card-text>
					<input type="file" ref="boton" class="d-none" @change="buscarImagen"> <!-- accept="image/*" -->
					<v-btn color="primary" @click="$refs.boton.click()">Buscar imagen</v-btn>
					<v-btn
						:loading="loading"
						color="blue-grey"
						class="white--text"
						@click="subirImagen"
						:disabled="file === null || loading"
						>
							Upload<v-icon right dark>fas fa-cloud-upload-alt</v-icon>
					</v-btn>
				</v-card-text>

				<v-card-text class="error white--text" v-if="error != ''">
					<h4>{{ error }}</h4>
				</v-card-text>

				<v-card-text v-if="file">
					<h4>{{ file.name }}</h4>
					<v-img :src="urlTemporal"></v-img>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	import { mapState } from 'vuex'
	import { firebase, storage, db} from '@/firebase'

	export default {
		name: 'Admin',
		data() {
			return {
				file: null,
				urlTemporal: '',
				loading: false,
				error: ''
			}
		},
		computed: {
			...mapState(['usuario'])
		},
		methods: {
			buscarImagen(e) {
				this.file = e.target.files[0];
				const fileType = this.file.type;
				this.error = '';

				if (fileType != 'image/jpeg' && fileType != 'image/png') {
					this.error = 'Sorry! only JPEG files, please.'
					this.file = null;
					return;
				}

				const reader = new FileReader();
				reader.readAsDataURL(this.file);
				reader.onloadend = () => {
					this.urlTemporal = reader.result; // file info based on base64
				}
			},
			subirImagen() { // async
				this.loading = true;
				try {
					// const refImagen = storage.ref().child(this.usuario.email).child('foto perfil');
					// //await refImagen.put(this.file);
					// const res = await refImagen.putString(this.urlTemporal, 'data_url');
					// const urlDescarga = await refImagen.getDownloadURL();
					// this.usuario.foto = urlDescarga;
					// db.collection('usuarios').doc(this.usuario.uid).update({
					// 	foto: urlDescarga
					// })

					const storageRef = storage.ref();
					const uploadTask = storageRef.child(this.usuario.email).child('foto perfil').put(this.file);
					uploadTask.on('state_changed', function(snapshot) {
						const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						console.log('Upload is ' + progress + '% done');
						switch (snapshot.state) {
							case firebase.storage.TaskState.PAUSED: // or 'paused'
							console.log('Upload is paused');
							break;
							case firebase.storage.TaskState.RUNNING: // or 'running'
							console.log('Upload is running');
							break;
						}
					}, (e) => {
						console.error(e);
					}, () => {
						uploadTask.snapshot.ref.getDownloadURL()
							.then((downloadURL) => {
								this.usuario.foto = downloadURL;
								db.collection('usuarios').doc(this.usuario.uid).update({
									foto: downloadURL
								}).then(() => {
									this.loading = false;
								})
							});
					});
				} catch (e) {
					console.error(e);
				}
			}
		}
	}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador"
    >
      {{ titulo }}: {{ contador }}
    </h1>
    <h2>state array = {{ array }}</h2>
    <button @click="accionIncrementar(12)">Incrementar</button>
    <BtnDisminuir></BtnDisminuir><hr>
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
    <hr>
    <p>Array elements > 10 = {{ getArrayValues }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir'
import BotonAccion from '../components/BotonAccion'

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  data() {
    return {
      titulo: 'Mi contador Vuex'
    }
  },
  computed: {
    ...mapState(['contador', 'array']),
    colorContador() {
      return this.contador > 100 ? {'color':'green'} : {'color': 'crimson'};
    },
    // ...mapGetters(['getArrayValues'])
    getArrayValues() {
      return this.$store.getters.getArrayValues;
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>

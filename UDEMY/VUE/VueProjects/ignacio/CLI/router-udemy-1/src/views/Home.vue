<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <Titulo texto="Pagina de Inicio"></Titulo>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Titulo from '../components/Titulo'

export default {
  name: 'Home',
  components: {
    Titulo
  }
}
</script>

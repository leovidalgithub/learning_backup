<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Mi contador: {{ $store.state.contador }}</h1>
    <input type="text" v-model="texto"><br>
    <h2>input value = {{ texto }}</h2>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
      return {
        texto: ''
      }
    },

}
</script>


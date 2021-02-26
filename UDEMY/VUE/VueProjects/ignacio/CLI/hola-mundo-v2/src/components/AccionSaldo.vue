<template>
    <!-- @click="this.$emit('accion') -->
    <button @click="accion" :disabled="saldoAgotado">{{ texto }} Saldo</button>
</template>

<script>
export default {
    name: 'AccionSaldo',
    props: {
        texto: {
            type: String,
            default: ''
        },
        saldoAgotado: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    methods: {
        accion() {
            this.$emit('accion')
        }
    },
}
</script>

<style>

</style>
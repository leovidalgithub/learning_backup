<template>
    <h2>Tipo de Cuenta: {{ cuenta }}</h2>
    <h2>Saldo: {{ saldo }}</h2>
    <h2>Cuenta: {{ estado ? 'Activa' : 'Desactivada' }}</h2>
    <div v-for="(servicio, index) in servicios" :key="index">
        {{ index }} - {{ servicio }}
    </div>
    <AccionSaldo
        texto="Aumentar"
        @accion="aumentar"
    />
    <AccionSaldo
        texto="Disminuir"
        :saldoAgotado="saldo <= 0"
        @accion="disminuir"
    />
</template>

<script>
import AccionSaldo from "./AccionSaldo";

export default {
    name: 'Cuenta',
    components: {
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['giro', 'abono','transferencia']
        }
    },
    methods: {
        aumentar() {
            this.saldo += 100
        },
        disminuir() {
            if (this.saldo <= 0) {
                alert('Saldo agotado!')
            } else {
                this.saldo -= 100
            }
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <form @submit.prevent="procesarFormulario">
        <input
            type="text"
            class="form-control my-2"
            placeholder="Ingrese nombre"
            v-model.trim="tarea.nombre"
        >
        <div class="form-check form-check-inline">
            <input
                type="checkbox"
                class="form-check-input"
                id="check-1"
                name="check-1"
                v-model="tarea.categorias"
                value="javascript"
            >
            <label for="check-1" class="form-check-label" >Javascript</label>
        </div>
        <div class="form-check form-check-inline">
            <input
                type="checkbox"
                class="form-check-input"
                id="check-2"
                name="check-2"
                v-model="tarea.categorias"
                value="node js"
            >
            <label for="check-2" class="form-check-label" >Node.js</label>
        </div>

        <div class="mt-2">
            <div class="form-check form-check-inline">
                <input
                    type="radio"
                    class="form-check-input"
                    name="radio-1"
                    id="radio-1"
                    v-model="tarea.estado"
                    value="urgente"
                >
                <label for="radio-1" class="form-check-label">Urgente</label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    type="radio"
                    class="form-check-input"
                    name="radio-2"
                    id="radio-2"
                    v-model="tarea.estado"
                    value="relax"
                >
                <label for="radio-2" class="form-check-label">Relax</label>
            </div>
        </div>
        <div class="mt-2">
            <input
                type="number"
                class="form-control"
                v-model.number="tarea.numero"
            >
        </div>
        <button
            type="submit"
            class="btn btn-dark mt-2 btn-block"
            :disabled="bloquear"
        >
            Procesar
        </button>
    </form>
    <hr>
    <p>model = {{tarea}}</p>
</template>

<script>
export default {
    name: 'Home',
    components: {
    },
    data() {
        return {
            tarea: {
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        }
    },
    methods: {
        procesarFormulario() {
            console.log(this.tarea);
            this.tarea = {
                nombre: '',
                categorias: [],
                estado: '', 
                numero: 0
            }
        }
    },
    computed: {
        bloquear() {
            return this.tarea.nombre.trim() === '';
        }
    }
}
</script>

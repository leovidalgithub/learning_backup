<template>
    <form @submit.prevent="procesarFormulario">
        <Inputdata :tarea="tarea"></Inputdata>
    </form>
    <hr>
    <ListaTareas :tareas="tareas"></ListaTareas>
</template>

<script>
import Inputdata from '../components/Inputdata'
import ListaTareas from '../components/ListaTareas'
import { mapState, mapActions } from 'vuex'
const nanoid = require('nanoid')

export default {
    name: 'Home',
    components: {
        Inputdata,
        ListaTareas
    },
    computed: {
        ...mapState(['tarea', 'tareas'])
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['addTarea', 'cleanTareaObj']),
        procesarFormulario() {
            // generar id
            this.tarea.id = nanoid();
            this.addTarea(this.tarea);
            // cleaning tarea obj
            this.cleanTareaObj();
        }
    },
    created () {
        this.cleanTareaObj();
    }
}
</script>

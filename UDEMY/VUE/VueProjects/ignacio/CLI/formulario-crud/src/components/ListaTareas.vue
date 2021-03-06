<template>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cats</th>
            <th scope="col">Estado</th>
            <th scope="col">Numero</th>
            <th colspan="2" class="text-center">Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in tareas" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.nombre }}</td>
            <td>{{ item.categorias.join(', ') }}
            </td>
            <td>{{ item.estado }}</td>
            <td>{{ item.numero }}</td>
            <td>
                <button class="btn btn-success">Edit</button>
            </td>
            <td>
                <button class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    </tbody>
    </table>
</template>

<script>
export default {
    name: 'ListaTareas',
    props: {
        tareas: {
            type: Array,
            default: []
        },
    },
    computed: {
        name() {
            return this.data
        }
    },
    watch: {
        tareas: function(newValue, oldValue) {
            console.log('newValue');
            console.log(newValue);
        }
    }
}
</script>

<style>

</style>
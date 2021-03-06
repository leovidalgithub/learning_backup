<template>
    <h1>{{ texto }}</h1>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        texto: {
            type: String,
            required: true,
            default: '',
            validator: function(value) {
                return value.length > 5;
            }
        }
    }
}
</script>

<style>

</style>
<template>
    <Titulo texto="Titulo de mi Blog"></Titulo>
    <!-- <button @click="consumirApi">Consumir API</button> -->
    <hr>
    <div v-for="item in arrayBlog" :key="item.id">
        <router-link :to="`/blog/${item.id}`">
            {{ item.title }}
        </router-link>
    </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo
    },
    data() {
        return {
            arrayBlog: []
        }
    },
    methods: {
        async consumirApi() {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts');
                this.arrayBlog = await data.json();
            } catch (error) {
                console.log('api error', error);
            }
        }
    },
    created () {
        this.consumirApi();
    },
}
</script>

<style>

</style>
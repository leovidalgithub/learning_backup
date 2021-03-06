<template>
    <Titulo texto="Article Reading" /><hr>
    <!-- <Titulo texto="Article Reading" /><hr> -->
    <h2>Displaying Article # {{ $route.params.id }}</h2>
    <h3>{{ article.title }}</h3>
    <p class="article-body" :class="{loaded: article.body != ''}">{{ article.body }}</p>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    name: 'Articulo',
    components: {
        Titulo
    },
    data() {
        return {
            article: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        getArticle() {
            let id = this.$route.params.id;
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => res.json())
                .then(data => this.article = data)
        }
    },
    created () {
        this.getArticle();
    }
}
</script>

<style scoped>
    .article-body {
        font-size: 1.2rem;
        opacity: 0;
        transition: opacity 4s ease-in-out;
    }
    .loaded {
        opacity: 1 !important;
    }
</style>
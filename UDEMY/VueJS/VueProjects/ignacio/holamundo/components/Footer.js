app.component('footer-banco', {
    // props: ['valor', 'fecha'],
    props: {
        'valor': Number,
        'fecha': String
    },
    template: /*html*/`
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{ texto }}</h3>
            <p>valor = {{ valor }}</p>
            <p>fecha = {{ fecha }}</p>
        </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web'
        }
    }
})

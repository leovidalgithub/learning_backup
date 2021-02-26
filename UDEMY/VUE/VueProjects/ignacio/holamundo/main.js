const app = Vue.createApp({
    data() {
        return {
            titulo: 'Este es un Hola Mundo con Vue.js!',
            cantidad: 80,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            firstName: 'Leo',
            lastName: 'Vidal'
        }
    },
    methods: {
        cuentaAtras() {
            const counter = setInterval(() => {
                this.cantidad--;
                if(this.cantidad < -10) clearInterval(counter);
            }, 100);
        },
        agregarSaldo() {
            this.cantidad += 10;
        },
        disminuirSaldo(valor) {
            if (this.cantidad <= 0) return;
            this.cantidad -= valor;
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 35 ? 'text-success' : 'text-danger';
        },
        masyusculaTexto() {
            return this.titulo.toUpperCase();
        },
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue) {
                let nameArray = newValue.split(' ');
                this.firstName = nameArray[0];
                this.lastName = nameArray[nameArray.length - 1];
            }
        }
    }
})

$( document ).ready(function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
});

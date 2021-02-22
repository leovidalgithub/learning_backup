new Vue ({
    el: '#app',
    data: {
        saludar: 'Hola desde la instancia app',
        numero: 11,
        listas: ['1','2','3','100','300'],
        activo: false,
        blog: '<h4>hola mundo</h4>',
        texto: '123',
        full_name: '',
        validation_error: '',
        nombre: '',
        text_error: false,
        text_sucess: false,
        sizetxt: '',
        font_texto: 16
    },
    methods: {
        saludo: function() {
            console.log(this.saludar);
        },
        verificarFullName: function() {
            if (this.full_name.length < 4) {
                this.validation_error = 'El nombre no es valido'
            } else {
                this.validation_error = 'El nombre es valido'
            }
        },
        verificarNombre: function() {
            if (this.nombre === 'leonardo') {
                this.text_sucess = true;
                this.text_error = false;
            } else {
                this.text_sucess = false;
                this.text_error = true;
            }
        },
        cambiarTexto: function() {
            this.font_texto = parseInt(this.sizetxt);
        }
    }
});

new Vue ({
    el: '#app2',
    data: {
        num1: 0,
        num2: 10,
        resultado: 0,
    },
    computed: { // propiedad computada
        sumarNumeros: function() {
            return parseInt(this.num1) + parseInt(this.num2);
        }
    },
    watch: {
        num1: function(val) {
            this.resultado = parseInt(val) + parseInt(this.num2);
        }
    },
    methods: {
        sumarNumeros2: function() {
            return parseInt(this.num1) + parseInt(this.num2);
        }
    }
})


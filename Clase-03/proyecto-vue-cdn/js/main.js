let app = new Vue({
    /* El es un objeto, representa el selecctor de un elemento al que se va a conectar*/
    el: '#app',

    /* Otro campo es data, otro objeto, tiene las propiedades y variables que va a tener acceso la vista */
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        contador: 123,
        contador2 : 456,
        contador3: 789,
        valor: 666,
        valor2: 777,
        valor3: 888,
        mostrar: true,
        mostrar2: true,
        personas: [
            'Matias', 'Juan', 'Daniel', 'Pedro'
        ]
    },
    methods: {
        incrementar(){
            this.contador3++
        },
        getContador3(){
            return this.contador3
        },
        actualizar(e){
            let dato = e.target.value
            console.log(dato)
            this.valor2 = dato
        }
    }
})
let app = new Vue({
    /* El es un objeto, representa el selecctor de un elemento al que se va a conectar*/
    el: '#app',

    /* Otro campo es data, otro objeto, tiene las propiedades y variables que va a tener acceso la vista */
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        contador: 123,
        contador2: 456,
        contador3: 789,
        valor: 666,
        valor2: 777,
        valor3: 888,
        mostrar: true,
        mostrar2: true,
        personas: [
            'Matias', 'Juan', 'Daniel', 'Pedro'
        ],
        alumnos: [
            { nombre: 'Matias', apellido: 'Romera', edad: 24, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png' },
            { nombre: 'Federico', apellido: 'Mateucci', edad: 20, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png' },
            { nombre: 'Florencia', apellido: 'Garduno', edad: 21, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png' },
            { nombre: 'Julian', apellido: 'Grilli', edad: 22, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png' }
        ]
    },
    methods: {
        incrementar() {
            this.contador3++
        },
        getContador3() {
            return this.contador3
        },
        actualizar(e) {
            let dato = e.target.value
            console.log(dato)
            this.valor2 = dato
        }
    }
})
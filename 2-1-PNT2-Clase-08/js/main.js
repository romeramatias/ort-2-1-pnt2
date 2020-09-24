console.log("* JS5 Herencia y composicion");

function PersonaJS5(nombre) {
   this.nombre = nombre;
   PersonaJS5.contador++;
}

PersonaJS5.prototype.saludo = function () {
   console.log("Holaaaaa");
};

// Propiedad estatica
PersonaJS5.contador = 0;

let mati = new PersonaJS5("Matias");
console.log(mati);
console.log(PersonaJS5.contador);

function EmpleadoJS5(nombre, sueldo) {
   // Composicion
   PersonaJS5.call(this, nombre);
   this.sueldo = sueldo;
}

// Aplica herencia al empleado, hereda de persona
EmpleadoJS5.prototype = Object.create(PersonaJS5.prototype);

EmpleadoJS5.prototype.trabajar = function () {
   console.log("Trabajando");
};

let empleado1 = new EmpleadoJS5("Mati", 10000);
console.log(empleado1);

//------------------------------------------------
console.log("\n* ES6 Herencia y composicion");

class PersonaES6 {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      PersonaES6.contador++;
   }

   // Propiedad estatica
   static contador = 0;

   saludar() {
      console.log("Holaaaa");
   }
}

let matiES6 = new PersonaES6("Matias", 24);
console.log(matiES6);

// Herencia en ES6, es casi como Javac
class EmpleadoES6 extends PersonaES6 {
   constructor(nombre, edad, sueldo) {
      super(nombre, edad);
      this.sueldo = sueldo;
   }

   trabajar() {
      console.log("Trabajando");
   }
}

let empleado2 = new EmpleadoES6("Mati", 24, 15000);
console.log(empleado2);
empleado2.trabajar();
empleado2.saludar();
console.log(`Cant de Personas: ${PersonaES6.contador}`);

//------------------------------------------------
console.log("\n* Funciones autoinvocadas");

console.log(`IIFE:
Inmediatly
Invoked
Function
Expression
`);

// Funcion autoinvocada, protege la variable? NO ME ANDA
(function (num) {
   let clave = 1234;
   console.log(clave);
   console.log(num);
});

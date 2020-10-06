// Herencia mediante prototipos
console.log("\x1b[35m%s\x1b[0m", "\nHERENCIA\n" + "-----------------------------------------\n");
console.log("\x1b[35m%s\x1b[0m", "0-Estudio inicial de prototipos/prototype");
console.log("\x1b[35m%s\x1b[0m", " (como se pisan objetos con mismo prototipo, acceso mediante __proto__)");

function Persona(nombre, domic) {
  this.nombre = nombre;
  this.domicilio = domic;
}
Persona.prototype.edad = 0;
Persona.prototype.getDomicilio = function () {
  return "Calle: " + this.domicilio.calle + " al " + this.domicilio.nro;
};

var persona1 = new Persona("Juan", { calle: "Alcorta", nro: 111 });
persona1.__proto__.edad = 10;
console.log('persona1: ', persona1); //--->para ver internamente en la consola del navegador
console.log("persona1.nombre : " + persona1.nombre);
console.log("persona1.getDomicilio(): " + persona1.getDomicilio());
console.log("persona1.__proto__.edad : " + persona1.__proto__.edad);
console.log("persona1.edad : " + persona1.edad);
console.log("");

var persona2 = new Persona("Pedro", { calle: "Goyena", nro: 222 });
persona2.__proto__.edad = 20;
console.log("persona2.nombre : " + persona2.nombre);
console.log("persona2.getDomicilio(): " + persona2.getDomicilio());
console.log("persona2.__proto__.edad : " + persona2.__proto__.edad);
console.log("");

console.log("Se pisan los prototipos: persona1.__proto__.edad pisado por persona2.__proto__.edad:");
console.log("persona1.edad (¡busqueda en cadena!): " + persona1.edad);
console.log("persona1.__proto__.edad : " + persona1.__proto__.edad);
console.log("----------------------------------------");

console.log("\x1b[35m%s\x1b[0m", "1-Herencia mediante prototipos con: ");
console.log("\x1b[35m%s\x1b[0m", "function ConstructHijo (args){\n  this.atrib=arg1\n  ConstructPadre.apply(this,[args...])\n}");

// "Clase" Empleado heredará de Persona y agregará el atributo profesion. 
// (en realidad se crea un objeto con Persona.apply() del tipo Persona que se agrega a Empleado)
function Empleado(nombre, domicilio, prof) {
  this.profesion = prof;
  Persona.apply(this, [nombre, { calle: domicilio.calle, nro: domicilio.nro }]);
}
var empleado1 = new Empleado('Carlos', { calle: 'Pavon', nro: 333 }, "Medico");
console.log("Objeto empleado1: ", empleado1);

// Ejemplo de uso de prototipos de Jon Mircha (me parece la mas aceptada):
console.log("\x1b[35m%s\x1b[0m", "\nEjemplo de curso de Jon Mircha\n" + "-----------------------------------------\n");
function Trabajador(nombre, domicilio, ocupacion) {
  this.ocupacion = ocupacion;
  this.construcPadre = Persona;
  this.construcPadre = Persona(nombre, domicilio)
}
Trabajador.prototype = new Persona();
Trabajador.prototype.constructor = Trabajador

const trabajador1 = new Trabajador('Jorge', { calle: 'Alsina', nro: 444 }, 'Carpintero');
console.log('Objeto trabajador1: ', trabajador1)
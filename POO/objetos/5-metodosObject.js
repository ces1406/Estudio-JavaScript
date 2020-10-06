console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

// Forma 7: usando Object.defineProperty() para definir propiedades
console.log("\x1b[36m%s\x1b[0m", 'Usando Object.defineProperty() para asignarle atributos')
console.log("\x1b[36m%s\x1b[0m", '   para definir cada propiedad (atributos y no para metodos?)')
var persona1 = {}; // o var personaH = new Object()
Object.defineProperty(persona1, 'nombre', { value: 'JUAN', writable: true, enumerable: true, configurable: true });
Object.defineProperty(persona1, 'domicilio', { value: { calle: 'ALSINA', nro: 111 }, writable: true, enumerable: true, configurable: true });
persona1.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona1.getNombre = () => { return 'Nombre :' + this.nombre }
console.log('persona1.nombre : ' + persona1.nombre)
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

// Forma 8: con Object.create() para crear el objeto y depaso asignarle los atributos
console.log("\x1b[36m%s\x1b[0m", 'Usando Object.create() para crear el objeto Y definir atributos')
// Se usa como prototipo a Object.prototype
var persona2 = Object.create(Object.prototype, {
    nombre: { value: 'PEDRO', writable: true, enumerable: true, configurable: true },
    domicilio: { value: { calle: 'GOYENA', nro: 222 }, writable: true, enumerable: true, configurable: true }
});
persona2.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona2.getNombre = () => { return 'Nombre :' + this.nombre }
console.log('persona2.nombre : ' + persona2.nombre)
console.log(persona2.getDomicilio())

// Se usa como prototipo a Persona1.prototype
function Persona1(nom, domic) {
    this.nombre = nom;
    this.domicilio = domic;
    this.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    this.getNombre = () => { return 'Nombre :' + this.nombre }
}
console.log("\x1b[36m%s\x1b[0m", 'usando como prototipo a Persona1')
var persona3 = Object.create(Persona1.prototype, {
    nombre: { value: 'MARIA', writable: true, enumerable: true, configurable: true },
    domicilio: { value: { calle: 'LONDRES', nro: 333 }, writable: true, enumerable: true, configurable: true }
});
persona3.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona3.getNombre = () => { return 'Nombre :' + this.nombre }
console.log('persona3.nombre : ' + persona3.nombre)
console.log(persona3.getDomicilio())
console.log(persona3.getNombre())

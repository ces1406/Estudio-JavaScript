console.log("\x1b[36m%s\x1b[0m", 'OBJETOS:\n' + '-----------------------------------------')
// Usando ES6 class()
console.log("\x1b[36m%s\x1b[0m", 'Usando ES6 class()')

class Persona {
    constructor(nombre, calle, num) {
        this._nombre = nombre;
        this.domicilio = {};
        this.domicilio.calle = calle;
        this.domicilio.nro = num
    }
    get nombre () { return this._nombre.toUpperCase() }
    set nombre (nomb) { this._nombre = nomb }
    getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };    
}
var persona1 = new Persona('JUAN', 'ALSINA', 111);
console.log('persona1.nombre : ' + persona1._nombre)
console.log(persona1.getDomicilio())


// ES6 get and set
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name.toUpperCase();  }
    set name(newName) {
        this._name = newName; // validation could be checked here such as only allowing non numerical values
    }
    walk() {console.log(this._name + ' is walking.'); }
}
let bob = new Person('Bob');
console.log('Accediendo al atributo name con bob.name: '+bob.name)
bob.walk();
bob.name ='roberto'
console.log('Despues de modificar bob:',bob)
bob.walk();
console.log('Accediendo al atributo name con bob.name: '+bob.name)
console.log('----------------------------------------')
// Clase inicial:
class Persona {
    constructor(nombre, prof) {
        this._nombre = nombre;
        this.profesion = prof;
    }
    get nombre() { return 'NOMBRE: ' + this.nombre; };
    set nombre(e) { this._nombre = e }
    codear() { console.log('puedo codear') }
}
var personaM = new Persona('Pepeta', 'Programador js');

// Solución 1 para "chequeo de tipos": chequear el tipo en la clase que lo usa
var Compania1 = (function () {
    var empleados;
    function CompaniaConstruct1() {
        function contratar(e) {
            if (e && e["codear"] && e["codear"] instanceof Function) {  // ACA ES DONDE SE HACE EL CHEQUEO DEL PARAMETRO
                empleados.push(e)
            } else {
                throw new Error("se trata de contratar a algo que no es un objeto de la clase persona")
            }
        }
    }
    return CompaniaConstruct1
})()

// Solución 2 para "chequeo de tipos": una clase interface que hace el duck typing
//  (especie de imitacion de interface de java)
class Interface1 {
    constructor(nombreInterface, metodos = [], propiedades = []) {
        this.nombre = nombreInterface;
        this.metodos = []; // No son los metodos en sí sino sus nombres
        this.propiedades = [];
        // Chequeo de que todos los nombres de metodos sean de tipo string:
        for (let i = 0, long = metodos.length; i < long; i++) {
            if (typeof metodos[i] !== 'string') throw new Error('El nombre de metodo debe ser de tipo string')
            this.metodos.push(metodos[i])
        }
        // Chequeo de que todos los nombres de las propiedades sean de tipo string:
        for (let i = 0, long = propiedades.length; i < long; i++) {
            if (typeof propiedades[i] !== 'string') throw new Error('El nombre de la propiedad debe ser de tipo string')
            this.propiedades.push(propiedades[i])
        }
    }
    chequear(obj) {
        var longMetodos = this.metodos.length;
        var longProps = this.propiedades.length;
        var miembroActual;
        if (obj) {
            for (let i = 0; i < longMetodos; i++) {
                miembroActual = this.metodos[i];
                if (!obj[miembroActual] || typeof obj[miembroActual] !== "function") throw new Error("no se encuentra el metodo");
            }
            for (let i = 0; i < longProps; i++) {
                miembroActual = this.propiedades[i];
                if (!obj[miembroActual] || typeof obj[miembroActual] === "function") throw new Error("no se encuentra la propiedad");
            }
        } else {
            throw new Error("No hay objeto a chequear")
        }
    }
}

var interface1 = new Interface1("interface", ['codear'], ['profesion'])

var Compania2 = (function () {
    var empleados = [];
    function CompaniaConstruct2() { }
    CompaniaConstruct2.prototype.contratar = function (e) {
        interface1.chequear(e)
        empleados.push(e)
    }
    CompaniaConstruct2.prototype.empleado = function (pos) {
        return empleados[pos]
    }
    return CompaniaConstruct2
})()

var compania2 = new Compania2()
compania2.contratar(personaM)
console.log('Empleado 0:' + compania2.empleado(0))
compania2.empleado(0).codear()
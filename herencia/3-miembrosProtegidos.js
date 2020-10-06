// 3-Miembros Protegidos (visibles por los herederos de la clase)
console.log("\x1b[32m%s\x1b[0m", '3-Miembros protegidos (que sean visibles solo para los herederos)--(solo atributos?)');

var Padre = (function () {
    var miembrosProtegidos;
    function adornar(cadena) { return '-->"' + cadena + '"<--' }
    function ConstructorPadre(nombre, edad, protegido) {
        miembrosProtegidos = protegido || {}; // si no viene nada en protegido le asigna un objeto vacío 
        miembrosProtegidos.adornar = adornar; // central: se pone a disposicion de los descendientes la funcion protegida del Padre1
        this.nombre = adornar(nombre);
        this.edad = edad
    }
    ConstructorPadre.prototype.sayHi = function () {
        return 'Hi ' + this.nombre
    }
    return ConstructorPadre;
}());

function ConstructorHijo(nombre, edad, oficio) {
    var miembroProtegido = {} // variable donde se almacenará el método (en este caso) protegido
    Padre.call(this, nombre, edad, miembroProtegido) // llama al constructor padre y le pasa "miembroProtegido" para que ahí le deposite el metodo protegido
    this.oficio = miembroProtegido.adornar(oficio) // usa el metodo protegido 
};

var hijo1 = new ConstructorHijo('hijoPepe', 11, 'carnicero')
console.log(hijo1)
console.log('hijo1.nombre : ' + hijo1.nombre)
console.log('hijo1.edad : ' + hijo1.edad)
console.log('hijo1.oficio:' + hijo1.oficio)
console.log('hijo1.sayHi():' + hijo1.sayHi()) //-->tira error, esa funcion no pertenece a hijo1
// ConstructorHijo.prototype = new Padre() <---con ésto solucionaría lo de arriba
//console.log('hijo1.adornar(cositas):' + hijo1.adornar('cositas'))
console.log('-----------------------------------------');


// 4-Herencia Multiple
console.log("\x1b[36m%s\x1b[0m", '4-Herencia Multiple');

function ConstructorPadre1(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
ConstructorPadre1.prototype.darNombre = function () {
    return 'Soy ' + this.nombre;
}

function ConstructorPadre2(apellido, sexo) {
    this.apellido = apellido;
    this.sexo = sexo;
}
ConstructorPadre2.prototype.darHola = function (nomb) {
    return 'Hola ' + this.nombre + ' te saluda ' + nomb
}
//NOTA: ésta técnica solo hace heredar los atributos pero NO los métodos !!

function ConstructorHijo(nombre, apellido, edad, sexo, oficio) {
    this.oficio = oficio;
    ConstructorPadre1.call(this, nombre, edad);
    ConstructorPadre2.call(this, apellido, sexo);
}
var hijo1 = new ConstructorHijo('hijoPepe', 'Perezin', 11, 'maculino', 'carnicero')
console.log('hijo1.nombre : ' + hijo1.nombre)
console.log('hijo1.edad : ' + hijo1.edad)
console.log('hijo1.oficio:' + hijo1.oficio)
console.log('hijo1.apellido:' + hijo1.apellido)
console.log(hijo1)

// Lo de abajo da error por lo ya explicado: solo se heredarán los atributos, NO los metodos
//console.log('hijo1.darNombre:' + hijo1.darNombre());
//console.log('hijo1.darHola:' + hijo1.darHola())
console.log('-----------------------------------------');

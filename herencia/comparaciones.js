// DEFINICION DE OBJETOS/CLASES/FUNCIONES CONSTRUCTORAS:

// objeto comun
const objLiteral = { atributo1: 'un texto', atributo2: 10 }

// objeto a partir de funcion constructora
function Clase1(arg1, arg2) {
    this.atributo1 = arg1;
    this.atributo2 = arg2;
}

function Clase2(arg1, arg2) {
    this.atributo1 = arg1;
    this.atributo2 = arg2;
}
Clase2.prototype.metodo1 = function () {
    return ('Clase2->( ' + this.atributo1 + ' , ' + this.atributo2 + ' )');
}

// objeto a partir de funcion constructora de una subclase que hereda con "Subclase.prototype = new Clase()"
// sin referirla dentro de la misma funcion constructora de la subclase (lo mas simple en herencia por prototipos)
function SubClase20(arg1, arg2, arg3) {
    this.atributo3 = arg3;
}
SubClase20.prototype = new Clase2();

// objeto a partir de funcion constructora de una subclase que hereda con apply
function SubClase21(arg1, arg2, arg3) {
    this.atributo3 = arg3;
    Clase2.apply(this, [arg1, arg2]);
}

// objeto a partir de funcion constructora de una subclase que hereda con "Subclase.prototype = new Clase()"
function SubClase22(arg1, arg2, arg3) {
    this.atributo3 = arg3;
    this.constSuper = Clase2;
    this.constSuper(arg1, arg2);
}
SubClase22.prototype = new Clase2();
SubClase22.prototype.constructor = SubClase22;

// objeto a partir de funcion constructora de una subclase que hereda con "Subclase.prototype = new Clase()" 
// sin "Subclase.prototype.constructor = Subclase"
function SubClase23(arg1, arg2, arg3) {
    this.atributo3 = arg3;
    this.constSuper = Clase2;
    this.constSuper(arg1, arg2);
}
SubClase23.prototype = new Clase2();

//CREACION DE OBJETOS:
objeto1 = new Clase1('argumento1->1', 1);
objeto2 = new Clase2('argumento1->2', 2);
objeto3 = new SubClase20('argumento1->', 3, 'argumento3->3');
objeto4 = new SubClase21('argumento1->4', 'argumento2->4', 'argumento3->4');
objeto5 = new SubClase22('argumento1->5', 'argumento2->5', 'argumento3->5');
objeto6 = new SubClase23('argumento1->6', 'argumento2->6', 'argumento3->6');

//MOSTRAR:
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Clase2: ", Clase2);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Clase2.prototype: ", Clase2.prototype);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto literal: ", objLiteral);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto 1: ", objeto1);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto 2: ", objeto2);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto 3: ", objeto3);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto 4: ", objeto4);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto 5: ", objeto5);
console.log("\x1b[35m\x1b[1m%s\x1b[0m%o", "Objeto 6: ", objeto6);

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    darNombre() {
        console.log('nombre: ->' + this.nombre + '<-')
    }
}
Persona.prototype.edad = 30;
Persona.prototype.darNombre2 = function () {
    console.log('nombre: ->' + this.nombre + '<-')
}

var persona1 = new Persona('juan');
var persona2 = new Persona('jorge');
console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "Persona: ", Persona);
console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "Persona.prototype: ", Persona.prototype);
console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "persona1: ", persona1);
console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "persona1.darNombre(): ", persona1.darNombre());

function Profesor(materia) {
    this.materia = materia;
    Persona.apply(this, ['carlos'])
    /*this.super = Persona;
    this.super('carlos')*/
}
Profesor.prototype = new Persona();
Profesor.prototype.constructor = Profesor;

var persona3 = new Profesor('matematicas')
console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "persona3: ", persona3);
//console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "persona3.__proto__: ", persona3.__proto__);
//console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "Persona.prototype: ", Profesor.prototype);
//console.log("\x1b[32m\x1b[1m%s\x1b[0m%o", "persona3.darNombre(): ", persona3.darNombre());

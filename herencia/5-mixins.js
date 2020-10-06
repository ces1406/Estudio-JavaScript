// 5-Mixins
console.log("\x1b[32m%s\x1b[0m", '5-Mixins');

function ConstructorPadre(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.darEdad = function () { console.log('Tenes ' + this.edad + ' años') }
}

var mixin1 = { adornar: function (param) { return '-->' + param + '<--' } }
var mixin2 = { sayHello: function () { console.log('Saying Hello!!') } }//, { adornar2: function (param) {return '**'+param+'**'} }]

function agregarMetodo(destino, origen) {
    for (var metodo in origen) {
        console.log('Metodo: ' + metodo)
        // si origen posee el metodo entonces se lo pasa a destino
        // (medio raro? si metodo está en el for es porque origen efectivamente lo posee)
        if (origen.hasOwnProperty(metodo)) {
            destino[metodo] = origen[metodo]
        }
    }
    return destino;
}

// Lo siguiente esta mal (tendría que haber pasado a ConstructorPadre.prototype como parametro)
agregarMetodo(ConstructorPadre, mixin2)
var padre1 = new ConstructorPadre('Garabani', 22)
//padre1.sayHello(); //<-----------------ESTO DA ERROR (por lo explicado arriba)
//padre1.constructor.sayHello() // <---las funciones no se agregaron al objeto directamente sino a su propiedad "constructor" (por lo explicado arriba)

// Lo siguiente sería lo correcto
agregarMetodo(ConstructorPadre.prototype, mixin1)
console.log(padre1.adornar('Cocorito'))
console.log('-----------------------------------------');


// 6-Mixins con ES6
console.log("\x1b[32m%s\x1b[0m", '6-Mixins con ES6');

class PadreClass {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.cantHijos = 0;
    }
    darEdad = function () { console.log('Tenes ' + this.edad + ' años') }
}

function mixinA(unaClasePadre) {
    return class extends unaClasePadre {
        tieneHijo(cant) { this.cantHijos += cant }; // el metodo que se agrega al hijo (que es quien hara un extend de este mixin)
    }
}
function mixinB(unaClasePadre) {
    return class extends unaClasePadre {
        muereHijo(cant) { this.cantHijos -= cant }; // el metodo que se agrega al hijo (que es quien hara un extend de este mixin)
    }
}

class HijoClass extends mixinB(mixinA(PadreClass)) {
    constructor(banda, nombre, edad) {
        super(nombre, edad)
        this.banda = banda;
    }
}

var objHijo1 = new HijoClass('Los Palmeras', 'Carlos', 34)
objHijo1.darEdad()
console.log('objHijo1.nombre: ' + objHijo1.nombre)
console.log('objHijo1.banda: ' + objHijo1.banda)
console.log('objHijo1.edad: ' + objHijo1.edad)
console.log('objHijo1.cantHijos: ' + objHijo1.cantHijos)
objHijo1.tieneHijo(5);
console.log('objHijo1.cantHijos: ' + objHijo1.cantHijos)
objHijo1.muereHijo(2);
console.log('objHijo1.cantHijos: ' + objHijo1.cantHijos)
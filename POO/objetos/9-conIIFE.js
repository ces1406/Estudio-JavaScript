// Construccion de objetos usando IIFE Inmediatly Invoked Function Expressions para dar privacidad a propiedades/atributos
console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", 'Propiedades privadas con IIFE')
console.log('----------------------------------------')

console.log("\x1b[36m%s\x1b[0m", 'IIFE (Inmediatly Invoked Function Expressions): ')
var unValor = function () { return 3 + 2 }();
console.log("var unValor = function(){return 3+2}()\nunValor= " + unValor + "\n")

// Mediante IIFE
console.log("\x1b[36m%s\x1b[0m", 'Construccion de objetos con variables privadas usando IIEF (inmediatly invoked function expression)')
var Persona1 = (function () { //Persona1 termina siendo un constructor (?:un constructor no podria pisarse)
    // variables locales a la funcion para que sean privadas para el constructor
    var nombre = 'sin Nombre';
    var domicilio = {};
    // metodos locales (tiene sentido que sean privados?)
    function getDom() { return 'Calle: ' + domicilio.calle + ' al ' + domicilio.nro; };
    getNomb = () => { return 'Nombre: ' + nombre }

    function constructorPersona(nomb, calle, num) {
        nombre = nomb;
        domicilio.calle = calle;
        domicilio.nro = num;
        this.getDomicilio = getDom;
        this.getNombre = getNomb;
    }
    return constructorPersona
}())

var persona1 = new Persona1('JUAN', 'ALSINA', 111);
console.log('persona1.nombre : ' + persona1.nombre + "\x1b[31m%s\x1b[0m", ' (se puede ver como no existe "persona1.nombre", el atributo nombre no es adherido al objeto)')
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
console.log('-----------------------------------------')
var persona2 = new Persona1('PEDRO', 'GOYENA', 222);
console.log("\x1b[31m%s\x1b[0m", 'Se creó otro objeto persona2 que pisará a persona1 (en realidad como lo que devuelve Persona1');
console.log("\x1b[31m%s\x1b[0m", 'es un constructor que termina haciendo referencia a las mismas variables privadas, los distintas objetos');
console.log("\x1b[31m%s\x1b[0m", 'que se vayan creando con Persona4 van a apuntar siempre a las mismas variables privadas)');
console.log(persona2.getDomicilio())
console.log(persona2.getNombre())
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')

// Construccion de objetos con variables privadas usando IIEF + weakmap()->de ES6
console.log("\x1b[36m%s\x1b[0m", 'Propiedades privadas con IIEF + weakmmap()de ES6')
console.log('----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", '1°->Uso de WeakMap()de ES6:')
//      El objeto WeakMap es una colección de pares clave/valor en la que las claves son objetos y los valores son valores arbitrarios.
//      Las claves de los WeakMaps solamente pueden ser del tipo Object
var mapaDebil = new WeakMap();
var ojeto1 = { frase: 'clave loca' }
mapaDebil.set({ name: 'coso', edad: 144 }, 'valor uno del weakmap');
mapaDebil.set(ojeto1, 14); //--->supuestamente solo sirve así (declarando antes un objeto como variable)
mapaDebil.set({ name: 'cosa' }, { cadena: 'bla bla bla', cantidad: 411 });
console.log('mapadebil.get("clave loca"): ' + mapaDebil.get(ojeto1));
console.log('mapadebil.get({name:"cosa"}): ' + mapaDebil.get({ name: 'cosa' }))

console.log('----------------------------------------')
var Persona2 = (function () { //Persona2 termina siendo un constructor
    var variablesPrivadas = new WeakMap();

    function constructorPersona(nomb, calle, num) {
        propPrivada = {
            nombre: nomb,
            domicilio: {
                calle: calle,
                nro: num
            }
        };
        variablesPrivadas.set(this, propPrivada);
        this.getDomicilio = function () { return 'Calle: ' + variablesPrivadas.get(this).domicilio.calle + ' al ' + variablesPrivadas.get(this).domicilio.nro; };
        this.getNombre = () => { return 'Nombre: ' + variablesPrivadas.get(this).nombre };
    }
    return constructorPersona
}())
var personaP = new Persona2('Potamo', 'alcortacot', 455);
console.log("\x1b[36m%s\x1b[0m", 'Construccion de objetos con variables privadas usando IIEF + weakmap()-> de ES6)')
console.log('personaP.nombre : ' + personaP.nombre + "\x1b[31m%s\x1b[0m", ' (se puede ver como no existe "personaN.nombre", el atributo nombre no es adherido al objeto)')
console.log(personaP.getDomicilio())
console.log(personaP.getNombre() + '\n-----------------------------------------')
var personaPP = new Persona2('RePotamo', 'av croacia', 364);
console.log("\x1b[31m%s\x1b[0m", 'Se creó otro objeto personaPP que ahora NO pisará a personaP');
console.log(personaPP.getDomicilio())
console.log(personaPP.getNombre())
console.log(personaP.getDomicilio())
console.log(personaP.getNombre() + '\n-----------------------------------------')

// IIFE con class de ES6 y WeakMap --->la mejor opcion?
console.log("\x1b[36m%s\x1b[0m", 'IIEF con class y WeakMap() de ES6')
var Persona3 = (function (){
    var unAtributoDeClase = 'atributo de clase publico'
    var unAtributoDeClasePrivado ='';
    var atributosPrivados = new WeakMap ();

    class Persona {
        constructor(unNombre,unDomicilio){
            this.atributoDeClase = unAtributoDeClase; // de acceso público --->(inicialmente de clase")NOTA: si un objeto lo modifica=>se modifica sólo para él
            unAtributoDeClasePrivado = 'atributo de clase privado';
            atributosPrivados.set(this,{nombre:unNombre,domicilio:unDomicilio})
        }
        getNombre = function (){
            return atributosPrivados.get(this).nombre
        }
        getAtribDeClase = function (){
            return unAtributoDeClasePrivado
        }
        setAtribDeClase = function (param='valor por default') {
            unAtributoDeClasePrivado = param;
        }
    }
    return Persona;
}())

var unaPersonaP = new Persona3('Carlitos Suarez', {calle:'av croacia', altura:364});
var unaPersonaD = new Persona3('Federicoz', {calle:'av alsinax', altura:122});
console.log('unaPersonaP.getNombre(): '+unaPersonaP.getNombre());
console.log('unaPersonaD.getNombre(): '+unaPersonaD.getNombre());
console.log('unaPersonaP.atributoDeClase: '+unaPersonaP.atributoDeClase);
console.log('unaPersonaD.atributoDeClase: '+unaPersonaD.atributoDeClase);
console.log('unaPersonaP.unAtributoDeClasePrivado: '+unaPersonaP.unAtributoDeClasePrivado);
console.log('unaPersonaD.unAtributoDeClasePrivado: '+unaPersonaD.unAtributoDeClasePrivado);
console.log('unaPersonaP.getAtribDeClase(): '+unaPersonaP.getAtribDeClase());
console.log('unaPersonaD.getAtribDeClase(): '+unaPersonaD.getAtribDeClase())
// prueba de seteo de atributos de la clase
console.log('-----------------seteo de atributos-----------------------')
unaPersonaP.atributoDeClase = 'nuevo valor de atributo de clase publico';
//unaPersonaP.unAtributoDeClasePrivado = 'nuevo valor de atributo de clase privado';
unaPersonaP.setAtribDeClase('nuevo valor de atributo de clase privado')
console.log('unaPersonaP.getAtribDeClase(): '+unaPersonaP.getAtribDeClase());
console.log('unaPersonaD.getAtribDeClase(): '+unaPersonaD.getAtribDeClase());
console.log('unaPersonaP.atributoDeClase: '+unaPersonaP.atributoDeClase);
console.log('unaPersonaD.atributoDeClase: '+unaPersonaD.atributoDeClase);
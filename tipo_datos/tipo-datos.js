// Prueba de tipos de datos
console.log("\x1b[36m%s\x1b[0m", 'Prueba de tipos de datos en javascript')
var cadena1 = 'una cadena de texto';
var cadena2 = cadena1;
var numero = 44;
var buleano = true;
var nul = null;
var objetoVacio = {}
var objetoLleno = {
    nombre: 'juancho',
    edad: 7
};
var funcion1 = function () {
    console.log('soy una funcion')
};
// tipo Symbol creado con ECMAScript05 es un tipo de dato con valor unico e inmutable(tipo string o undefined)
// cada vez que se llama a Symbol() se obtiene un identificador único
const simbolo1 = Symbol();
const simbolo2 = Symbol('cadena simbolo')

console.log('cadena1 : ' + cadena1);
console.log('cadena2 : ' + cadena2);
console.log('typeof cadena1 : ' + typeof cadena1)
console.log('typeof cadena2 : ' + typeof cadena2)
cadena2 = "cambiando string"
console.log('cambiando cadena2 (lo que producirá que tambien cambie cadena1?)' );
console.log('cadena1 : ' + cadena1);
console.log('cadena2 : ' + cadena2);
console.log('NO->por que string es un tipo de dato primitivo, no es referenciado\n' );

var vector1 = new Array();
var date1 = new Date();
console.log('typeof numero : ' + typeof numero)
console.log('typeof buleano : ' + typeof buleano)
console.log('typeof nul : ' + typeof nul)
console.log('typeof objetoVacio : ' + typeof objetoVacio);
console.log('typeof objetoLleno : ' + typeof objetoLleno)
console.log('typeof funcion1 : ' + typeof funcion1);
console.log('typeof vector1 : ' + typeof vector1)
console.log('typeof date1 : ' + typeof date1)
console.log('typeof simbolo1 : ' + typeof simbolo1)
console.log('typeof simbolo2 : ' + typeof simbolo2)
var objeto2 = objetoLleno;
var objeto3 = Object.assign({}, objeto2)
console.log('objeto2 : ' + JSON.stringify(objeto2))
objetoLleno.profesion = 'estudiante'
console.log('objetoLleno : ' + JSON.stringify(objetoLleno))
console.log('objeto2 : ' + JSON.stringify(objeto2))
console.log('objeto3 : ' + JSON.stringify(objeto3))

//-------------------tipos mas específicos------------
var unHexa1 = 0x20
var unHexa2 = 0x01
console.log("hexadecimales: unHexa1+unHexa2= "+unHexa1+unHexa2+ "  (el resultado lo imprime como una union de strings)")
var octal1 = 020
var octal2 = 003
console.log("hexadecimales: octal1+octal2 = "+octal1+octal2+ "  (el resultado lo imprime como una union de strings)")

//----------------------Strings-------------------------
console.log("cadena1.length:",cadena1.length);
console.log('cadena1.concat(" completa") : ' + cadena1.concat(" completa"));
console.log('cadena1 : ' + cadena1);
console.log('cadena1.indexOf("de") : ' + cadena1.indexOf('de'));
console.log('cadena1.charAt(8) : ' + cadena1.charAt(8));
console.log('cadena1.substring(2,5) : ' + cadena1.substring(2,5));
console.log('cadena1.localeCompare("aaaaa") : ' + cadena1.localeCompare('zaaaa'));
var cadena11 = cadena1.slice(2,5)
console.log('cadena1.slice(2,5): '+cadena11)
var vecStrings = cadena1.split(' ');
console.log('vector->cadena1.split(" "): ',vecStrings)

//---------------------Undefined-----------------------
var a;
if(a===undefined){ console.log('var a; --->es undefined 1')}
if(a==undefined){ console.log('var a; --->es undefined (con operador ==) 1')}
a=null;
if(a===undefined){ console.log('var a; --->es undefined 2') }
if(a==undefined){ console.log('var a; --->es undefined (con operador ==) 2')}
// if(aa===undefined){ console.log('la variable aa no existente; --->es undefined ')} --> tira error

let fecha1 = new Date();
let cad1 = ""
console.log('fecha1: ',fecha1);
fecha1.setHours("10:00:05")
console.log('fecha1: ',fecha1);
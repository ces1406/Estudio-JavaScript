//----------------------Strings-------------------------
let cadena1 = 'una cadena de texto';
let numero = 4566;
let vector=['uno ','dos ',' triqui']

console.log("cadena1: ",cadena1);
console.log("cadena1.length:",cadena1.length);
console.log('cadena1.concat(" completa") : ' + cadena1.concat(" completa"));
console.log('cadena1 : ' + cadena1);
console.log('cadena1.indexOf("de") : ' + cadena1.indexOf('de'));
console.log('cadena1.charAt(8) : ' + cadena1.charAt(8));
console.log('cadena1.substring(2,5) : ' + cadena1.substring(2,5));
console.log('cadena1.localeCompare("zuna cadena de texto") : ' + cadena1.localeCompare('zuna cadena de texto'));
console.log('cadena1.localeCompare("una cadena de texta") : ' + cadena1.localeCompare('una cadena de texta'));
console.log('cadena1.localeCompare("una cadena de texto") : ' + cadena1.localeCompare('una cadena de texto'));

var cadena11 = cadena1.slice(2,5)
console.log('cadena1.slice(2,5): ',cadena11)
console.log('typeof cadena1: ', typeof cadena11)

var vecStrings = cadena1.split(' ');
console.log('\nvector->cadena1.split(" "): ',vecStrings);

console.log('vector: ',vector);
var vecTo = vector.toString();
console.log('vector.toString(): ',vecTo)
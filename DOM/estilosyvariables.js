// ESTILOS:
console.log("\x1b[35m%s\x1b[0m", 'Seleccion de Atributos y Estilos: ')

const $titulo = document.querySelector('#tituloId');

const estilo1 = $titulo.style;
const estilo2 = $titulo.getAttribute("style");
const estilo3 = getComputedStyle($titulo);
//const estilo3 = window.getComputedStyle($titulo); Es lo mismo que lo de arriba

console.log('$titulo: ', $titulo)
console.log('$titulo.style: ', estilo1)
console.log('$titulo.getAttribute("style"): ', estilo2); //da null por que no es en sí un atributo de la etiqueta
console.log('window.getComputedStyle("$titulo"): ', estilo3)

const colorStyle = $titulo.style.color;
console.log('$titulo.style.color: ', colorStyle);

$titulo.style.setProperty("text-decoration", "underline")
$titulo.style.width = "50%"
$titulo.style.color = "rgb(100,100,188)"

// Accediendo a variables declaradas en el .css
const $html = document.documentElement;
const $body = document.body;

let color1 = getComputedStyle($html).getPropertyValue("--oscuro1");
let color2 = getComputedStyle($html).getPropertyValue('--amarillo1');

console.log('colores de getComputedStyle(elemento).getPopertyValue("prop"):',color1, color2);

let $elem1 = document.querySelector('h4');
//$elem1.style.setProperty('background-color', color1)
$elem1.style.backgroundColor = color1;

$html.style.setProperty("--oscuro1", "#ffffff")
color1 = getComputedStyle($elem1).getPropertyValue("--oscuro1")
console.log(color1, color2);
console.log('$elem1: ', $elem1)
$elem1.style.backgroundColor = color1;
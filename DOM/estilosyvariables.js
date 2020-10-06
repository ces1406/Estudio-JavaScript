// ESTILOS:
console.log("\x1b[35m%s\x1b[0m", 'Seleccion de Atributos y Estilos: ')

const $enlace = document.querySelector('.elemento');
const $enlace1= document.getElementById('formulario1');

const estiloEnlace1 = $enlace.style;
const estiloEnlace2 = $enlace1.style;
const estiloEnlace1_2 = $enlace.getAttribute("style");
const estiloEnlace3 = window.getComputedStyle($enlace);
const colorStyle = $enlace.style.color;

console.log("\x1b[34m%s\x1b[0m", '$enlace: ', $enlace)
console.log("\x1b[34m%s\x1b[0m", '$enlace1: ',$enlace1)
console.log("\x1b[34m%s\x1b[0m", '$enlace.style: ', estiloEnlace1)
console.log("\x1b[34m%s\x1b[0m", '$enlace1.style: ', estiloEnlace2)
console.log("\x1b[34m%s\x1b[0m", '$enlace.getAttribute("style"): ', estiloEnlace1_2); //me devuelve el $enlace.style.cssText ?
console.log("\x1b[34m%s\x1b[0m", 'window.getComputedStyle("$enlace"): ', estiloEnlace3)
console.log("\x1b[34m%s\x1b[0m", '$enlace.style.color: ', colorStyle);

$enlace.style.setProperty("text-decoration", "underline")
$enlace.style.width = "50%"

// Accediendo a variables declaradas en index.css
const $html = document.documentElement;
const $body = document.body;

let color1 = getComputedStyle($html).getPropertyValue("--oscuro1");
let color2 = getComputedStyle($html).getPropertyValue('--amarillo1');

console.log(color1, color2);
let $elem1 = document.querySelector('h4');
//$elem1.style.setProperty('background-color', color1)
$elem1.style.backgroundColor = color1;
$html.style.setProperty("--oscuro1", "#ffffff")
color1 = getComputedStyle($elem1).getPropertyValue("--oscuro1")
console.log(color1, color2);
console.log('$elem1: ', $elem1)
$elem1.style.backgroundColor = color1;
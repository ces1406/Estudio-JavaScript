// ESTILOS:
console.log("\x1b[35m%s\x1b[0m", 'Seleccion de Atributos y Estilos: ')

const $titulo = document.querySelector('#tituloId');
const $formu= document.getElementById('formulario1');

const estiloTitulo = $titulo.style;
const estiloFormu = $formu.style;
const estiloTitulo2 = $titulo.getAttribute("style");
const estiloTitulo3 = window.getComputedStyle($titulo);
const colorStyle = $titulo.style.color;

console.log('$titulo: ', $titulo)
console.log('$formu: ',$formu)
console.log('$titulo.style: ', estiloTitulo)
console.log('JSON.stringify($titulo.style): '+JSON.stringify(estiloTitulo))
console.log('$formu.style: ', estiloFormu)
console.log('$titulo.getAttribute("style"): ', estiloTitulo2); //me devuelve el $enlace.style.cssText ?
console.log('window.getComputedStyle("$titulo"): ', estiloTitulo3)
console.log('$titulo.style.color: ', colorStyle);

$titulo.style.setProperty("text-decoration", "underline")
$titulo.style.width = "50%"

// Accediendo a variables declaradas en index.css
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
// SELECTORES:
console.log("\x1b[35m%s\x1b[35m%s\x1b[0m", 'SELECTORES', '(Selectores en el DOM)')

// Usados antiguamente:
console.log("\x1b[35m%s\x1b[0m", 'Usados antiguamente:')
const documento = document.documentElement;
const body = document.body;
const elementosImg1 = document.getElementsByTagName('img');
const elementosImg2 = document.images;
const formularios = document.forms;
const elementosInputApellido = document.getElementsByName('apellido');
const elementosClaseInput = document.getElementsByClassName('input')

console.log("\x1b[32m%s\x1b[0m", 'document.documentElement  (representa a la etiqueta HTML): ', documento);
console.log("\x1b[32m%s\x1b[0m", 'document.body             (representa a la etiqueta body): ', body);
console.log("\x1b[32m%s\x1b[0m", 'document.getElementsByTagName("img"): ', elementosImg1);
console.log("\x1b[32m%s\x1b[0m", 'document.images: ', elementosImg2);
console.log("\x1b[32m%s\x1b[0m", 'document.forms: ', formularios);
console.log("\x1b[32m%s\x1b[0m", 'document.getElementsByTagName("img")[0]: ', elementosImg1[0]);
console.log("\x1b[32m%s\x1b[0m", 'document.getElementsByName("apallido"): ', elementosInputApellido);
console.log("\x1b[32m%s\x1b[0m", 'document.getElementsByClassName("input"): ', elementosClaseInput);
console.log("\x1b[32m%s\x1b[0m", 'document.getElementsByClassName("input")[0]: ', elementosClaseInput[0]);
console.log("\x1b[32m%s\x1b[0m", 'document.location: ', document.location);
console.log("\x1b[32m%s\x1b[0m", 'document.styleSheets: ', document.styleSheets);

// Usados mas actualmente:
const elementoTitulo = document.getElementById('tituloId');
const elementoClaseElemento = document.querySelector('.elemento')
const elementoIdLista3 = document.querySelector('#lista3')
const elementosClaseElementos = document.querySelectorAll('.elemento')
console.log("\x1b[35m%s\x1b[0m", 'Usados actualmente (aunque querySelector es más lento):');
console.log("\x1b[32m%s\x1b[0m", 'document.getElementById("tituloId"): ', elementoTitulo);
console.log("\x1b[32m%s\x1b[0m", 'document.getElementById("tituloId").nodeType: ', elementoTitulo.nodeType);
console.log("\x1b[32m%s\x1b[0m", 'document.querySelector("#lista3"):', elementoIdLista3)
console.log("\x1b[32m%s\x1b[0m", 'document.querySelector("#lista3").nodeType:', elementoIdLista3.nodeType)
console.log("\x1b[32m%s\x1b[0m", 'document.querySelector(".elemento"):', elementoClaseElemento)
console.log("\x1b[32m%s\x1b[0m", 'document.querySelectorAll(".elemento"):', elementosClaseElementos)
console.log("\x1b[32m%s\x1b[0m", 'document.querySelectorAll(".elemento")[2]:', elementosClaseElementos[2])
console.log("\x1b[32m%s\x1b[0m", 'document.querySelectorAll(".elemento")[2].nodeType:', elementosClaseElementos[2].nodeType)
const subElementos = elementosClaseElementos[2].childNodes
const subElemento2 = subElementos[1]
console.log("\x1b[35m%s\x1b[0m", '\nNodos:')
console.log("\x1b[32m%s\x1b[0m", 'document.querySelectorAll(".elemento")[2].childNodes:', subElementos)
console.log("\x1b[32m%s\x1b[0m", 'document.querySelectorAll(".elemento")[2].childNodes[2]:', subElemento2)
console.log("\x1b[32m%s\x1b[0m", 'document.documentElement.nodeType:', document.documentElement.nodeType)
console.log("\x1b[32m%s\x1b[0m", 'document.querySelectorAll(".elemento")[2].childNodes[2].childNodes:', subElemento2.childNodes)
const textoSubElemento2 = subElemento2.childNodes[0]
console.log("\x1b[32m%s\x1b[0m", 'textoSubElemento2:', textoSubElemento2)
console.log("\x1b[32m%s\x1b[0m", 'textoSubElemento2.nodeType:', textoSubElemento2.nodeType)
console.log("\x1b[32m%s\x1b[0m", 'textoSubElemento2.nodeValue:', textoSubElemento2.nodeValue)
textoSubElemento2.nodeValue = "Otro titulo (cambiado con javascript)"


// ATRIBUTOS:
console.log("\x1b[35m%s\x1b[0m", '\nATRIBUTOS')
var nodo1 = document.getElementsByClassName('elemento')[1];
console.log("\x1b[32m%s\x1b[0m", 'document.getElementsByClassName("elemento")[1]: ', nodo1);
// Los atributos se acceden con: nodo1.nombreAtributo
console.log("\x1b[32m%s\x1b[0m", 'nodo1.textContent: ', nodo1.textContent);
console.log("\x1b[32m%s\x1b[0m", 'nodo1.innerHTML: ', nodo1.innerHTML);
console.log("\x1b[32m%s\x1b[0m", 'nodo1.outerHTML: ', nodo1.outerHTML);
console.log("\x1b[32m%s\x1b[0m", 'nodo1.id: ', nodo1.id);
console.log("\x1b[32m%s\x1b[0m", 'nodo1.getAttribute("style"): ', nodo1.getAttribute("style"));
console.log("\x1b[32m%s\x1b[0m", 'nodo1["style"]: ', nodo1["style"], '-->solo funciona con atributos de 1 sola palabra??');

// MODIFICACIONES EN LA PAGINA:
console.log("\x1b[35m%s\x1b[0m", 'Modificaciones en la página: ')

// ClassName y ClassList:
console.log("\x1b[35m%s\x1b[0m", 'ClassName y ClassList:')
let formu1 = document.querySelector("#formulario1")
console.log("\x1b[34m%s\x1b[0m", 'formu1: ', formu1)
console.log("\x1b[34m%s\x1b[0m", 'formu1.className: ', formu1.className)
console.log("\x1b[34m%s\x1b[0m", 'formu1.classList: ', formu1.classList)
// Añadir una clase a un elemento
formu1.classList.add("claseExtra")
// nota: no le agrega la clase alert-info a todas las etiquetas donde aparece clase1 sino a la primera
//       que de hecho busco y trajo con el document.querySelector(".clase1")


// Texto y contenido interno de las etiquetas:
let $etiq1 = document.querySelector("h5");
console.log("\x1b[34m%s\x1b[0m", 'document.querySelector("h5"): ', $etiq1);
let texto1 = "Titulo: <b>Lista 1</b>"
//$etiq1.innerText = texto1 //-->NO interpreta las etiquetas internas (como el <b></b>)
$etiq1.innerHTML = texto1 //-->SI interpreta las etiquetas internas (como el <b></b>)
//$etiq1.textContent = texto1 //-->NO interpreta las etiquetas internas (como el <b></b>)

// DOM-traversing
console.log("\x1b[35m%s\x1b[0m", 'DOM-traversing:')
const lista3 = document.querySelector("#lista3"); // nuestro pivote para el traversing (es ver el .children .parentElement .firstChild etc.)
console.log("\x1b[34m%s\x1b[0m", 'lista3"): ', lista3);
console.log("\x1b[34m%s\x1b[0m", 'lista3.children"): ', lista3.children);
console.log("\x1b[34m%s\x1b[0m", 'lista3.childNodes"): ', lista3.childNodes);
console.log("\x1b[34m%s\x1b[0m", 'lista3.parentNode"): ', lista3.parentNode);
console.log("\x1b[34m%s\x1b[0m", 'lista3.parentElement": ', lista3.parentElement);
var seccionListas = lista3.parentNode.parentNode;
console.log("\x1b[34m%s\x1b[0m", 'lista3.parentNode.parentNode": ', seccionListas);

// Fragmentos:
// Como agregar elementos al html es costoso (agregar cientos de items al DOM por ejemplo) => es mejor crear fragmentos
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"]
$ul1 = document.createElement("ul");
$fragmento1 = document.createDocumentFragment();
dias.forEach(dia => {
    const $li = document.createElement("li");
    $li.textContent = dia;
    $fragmento1.appendChild($li)
});
$ul1.appendChild($fragmento1)
seccionListas.appendChild($ul1)

// MODIFICANDO ELEMENTOS (Old Style): 
console.log("\x1b[35m%s\x1b[0m", 'MODIFICANDO ELEMENTOS (Old Style)":')
/*const tarjetas = document.querySelector(".card-group"); // nuestro pivote para el traversing
const lis = document.querySelector("li")
console.log('lis', lis)*/

// nuestro pivote para el traversing: (nota->el childNodes[0] era un nodo tipo text con valor:"enter")
const tarjetas = document.querySelector("footer").childNodes[1]; 
console.log("tarjetas: ", tarjetas)
const card1 = document.createElement("div");
card1.className = "card"
card1.innerHTML = "<img src='gattt.jpeg' class='card-img-top' alt='...' width='150' height='350'><div class='card-body'>";
card1.innerHTML += "<h5 class='card-title'>Card title</h5><p class='card-text'>This is a wider card with supporting";
card1.innerHTML += "text below as a natural lead-in to additional content. This content is a little bit longer.</p>";
card1.innerHTML += "</div><div class='card-footer'><small class='text-muted'>Last updated 3 mins ago</small></div>";
const card2 = tarjetas.children[1].cloneNode(true) //el gato
//tarjetas.appendChild(nuevaimg)
tarjetas.replaceChild(card1, tarjetas.children[0])
tarjetas.insertBefore(card2, tarjetas.firstElementChild);
//tarjetas.removeChild(tarjetas.lastElementChild)
console.log("nueva img: ", card1)
console.log("tarjetas: ", tarjetas)

// MODIFICANDO ELEMENTOS (New Style)
/*
    .insertAdjacent...
        .insertAdjacentElement(posicion,elemento)
        .insertAdjacentHTML(posicion,codigoHtml)
        .insertAdjacentText(posicion,texto)

    posiciones:
        beforebegin(hermanoAnterior)
        afterbegin(primerHijo)
        beforeend(ultimoHijo)
        afterend(hermanoSiguiente)
*/
console.log("\x1b[35m%s\x1b[0m", 'MODIFICANDO ELEMENTOS (New Style):')
let contenido = "<div class='card'>"
contenido += "<img src='hermes.jpg' class='card-img-top' alt='...'><div class='card-body'>";
contenido += "<h5 class='card-title'>Card title</h5><p class='card-text'>This is a wider card with supporting";
contenido += "text below as a natural lead-in to additional content. This content is a little bit longer.</p>";
contenido += "</div><div class='card-footer'><small class='text-muted'>Last updated 3 mins ago</small></div></div>";

let contenido2 = "<div class='card'> <h5 class='card-title'>Card title</h5><p class='card-text'>This is a wider card with supporting";
contenido2 += "<div class='card-body'>text below as a natural lead-in to additional content. This content is a little bit longer.</p>";
contenido2 += "</div><div class='card-footer'><small class='text-muted'>Last updated 3 mins ago</small></div></div>";

let img1 = "<img src='hermes.jpg' class='card-img-top' alt='...'><div class='card-body'>";
let img2 = "<img src='gatt.jpeg' class='card-img-top' alt='...'><div class='card-body'>";
const texto = " PAPARATA SEPARATA MIRATATA DE BATATA"
const tarjeta1 = tarjetas.children[1];

card1.insertAdjacentText("beforeend", texto)

tarjeta1.insertAdjacentElement("beforebegin", card1); // lo agrega como hermano anterior 
tarjeta1.insertAdjacentHTML("afterend", contenido); // lo agrega como hermano siguiente
tarjetas.insertAdjacentHTML("afterbegin", contenido); // lo agrega como primer hijo
tarjetas.insertAdjacentHTML("beforeend", contenido); // lo agrega como ultimo hijo
//contenido2.insertAdjacentHTML("afterbegin", img1)
//contenido2.insertAdjacentText("afterbegin",contenido2)
tarjetas.insertAdjacentHTML("beforeend", contenido)
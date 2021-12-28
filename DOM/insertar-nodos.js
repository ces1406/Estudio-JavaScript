// INSERTANDO CONTENIDO EN LA PAGINA:
console.log("\x1b[35m%s\x1b[0m", 'Insertando contenido en la página: ');

var seccion = document.querySelector('#insertanodo')

// 1. CON APPEND()
var btn1 = document.querySelector('#btnInserta1');
btn1.addEventListener('click',agregarParrafo1);
function agregarParrafo1(e){
    console.log('agregando parrafo con append()');
    const p = document.createElement("p");
    p.append("-Soy un elemento <p> agregado mediante append()")
    seccion.append(p)
}

// 2. CON APPENDCHILD()
var btn2 = document.querySelector('#btnInserta2');
btn2.addEventListener('click',agregarParrafo2);
function agregarParrafo2(e){
    console.log('agregando parrafo con appendChild()');
    const p = document.createElement("p");
    p.textContent = "-Soy un elemento <p> agregado mediante appendChild()";
    seccion.append(p)
}

// 3. CON INSERTADYACENTHTML()
var btn3 = document.querySelector('#btnInserta3');
btn3.addEventListener('click',agregarParrafo3);
function agregarParrafo3(e){
    console.log('agregando parrafo con insertAdjacentHTML()');
    const p = "<p>Soy un elemento p agregado mediante insertAdjacentHTML </p>";
    seccion.insertAdjacentHTML('afterbegin',p);
}

// 4. CON INNERTHTML()
var btn4 = document.querySelector('#btnInserta4');
btn4.addEventListener('click',agregarParrafo4);
function agregarParrafo4(e){
    console.log('agregando parrafo con innerHTML');
    //const p = "<p>Soy un elemento p agregado mediante insertAdjacentHTML </p>";
    //seccion.insertAdjacentHTML('afterbegin',p);
    seccion.innerHTML += "<p>Soy un elemento p agregado mediante innerHTML </p>"
}
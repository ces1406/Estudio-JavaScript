// Capitulo 72 #jonmircha: EVENTOS

//1-Como un atributo html que invoca a la siguiente function:
function botonPresionado1() {
    alert("me apretaste");
    console.log(event); //event->está deprecado
}


//2-Con manejador semántico:
const $btn1 = document.getElementById("idBotonSemantico");
//$btn1.onclick = botonPresionado1;
// o:
$btn1.onclick = (e) => {
    alert("Soy una arrow function");
    console.log('evento con e:',e)
    console.log('evento con event',event); //event->está deprecado
}
    /*  Desventajas:
        1) Solo se ejecuta una sola y única funcion
        2) No se puede remover el manejador del evento
        3) La  funcion  NO puede recibir parametros. La  única  opcion  es un  solo y que representa al  
            evento (aunque tampoco es necesario porque se la puede invocar mediante la palabra reservada "event")
    */

//3-Con Manejadores múltiples -> EventListeners:
const $btn2 = document.getElementById("idBoton4");
$btn2.addEventListener("click", botonPresionado1);
$btn2.addEventListener("click", (e) => {
    alert("holisss tambien");
    console.log(event.type)
    console.log(event.target)
    console.log(e.type);
    console.log(e.target)
});


//4-Pasando parametros al manejador (Capitulo 73 #jonmircha: EVENTOS)
function saludar(nomb='vacio'){
    console.log("Hola ->"+nomb)
    /*
        Nota: aunque ponga un parametro por defecto me sale "Hola -> [object MouseEvent]"
            Esto demuestra que toda funcion manejadora de eventos no podria recibir mas
            parametros que el evento en si (el event, o "e")
    */
}
$btn2.addEventListener('click',()=>saludar(' Mr. Putin'))
/* Nota: lo de arriba es el truco para permitir uso de parametros, agregar un nivel mas de ejecución */
$btn2.addEventListener("click",saludar)
//Removiendo el manejador: (no se pueden remover los definidos como arrow functions)
$btn2.removeEventListener('click',saludar)


//5-Flujo de eventos:
//const $divsEventos = document.getElementsByClassName("flujo-eventos")
function flujoEventos(e){
    console.log('------------------------------------')
    console.log('evento originado por: '+e.target.id+' (ahora en: '+this.id+' )')
}
const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log('Elementos de la clase flujo-eventos: ',$divsEventos)
/*$divsEventos.forEach((div) => { 
    div.addEventListener("cick",flujoEventos) 
}); */

$btnFlujo = document.getElementById("idBtn")
$btnFlujo.addEventListener("click",flujoEventos)
$div1 = document.getElementById("idDivPropagacion1")
$div2 = document.getElementById("idDivPropagacion2")
$div3 = document.getElementById("idDivPropagacion3")
$div1.addEventListener("click",flujoEventos)
$div2.addEventListener("click",flujoEventos)
$div3.addEventListener("click",flujoEventos)
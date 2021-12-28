let simbolo1 =Symbol();
let simbolo2 =Symbol('simbolon');
console.log('simbolo1: ',simbolo1);
console.log('simbolo2: ',simbolo2);


// USO 1: EVITAR USO DE CADENAS DE TEXTOS COMO PARAMETRO:
const ACCIONES ={
    ABRIR: Symbol("abrir"),
    CERRAR: Symbol("cerrar") //nota: podría ser solamente Symbol()
}
function cambiarGrifo(accion){
    if(accion===ACCIONES.ABRIR){
        console.log("abrir el grifo");
        return;
    }
    if(accion===ACCIONES.CERRAR){
        console.log("cerrar el grifo");
        return;
    }
    console.log("accion desconocida");
    return;
}
cambiarGrifo(ACCIONES.CERRAR);  // invocacion OK
cambiarGrifo(ACCIONES.ABRIR);   // invocacion OK
cambiarGrifo("CERRAR")          // invocacion MAL


// USO 2: EVITAR COLISIONES DE ATRIBUTOS
const persona ={
    nombre:'juan',
    apellido:'perez'
};
const estaLoggeado = Symbol("Logged");
persona[estaLoggeado] = false;
console.log(Object.keys(persona)); /* 
                                        ['nombre','apellido'] => no aparece la propiedad "estaLoggeado", por 
                                        eso si hicieramos:  " persona.estaLoggeado='si'; " no se produce una
                                        colisión de atributos
                                    */
// Una Interface es en definitiva una coleccion/array de nombres de metodos para despues 
// controlar que la clase que lo implementa cumple con "tener definidos esos metodos"

// Constructor de interfaces:
var Interface = function(nombre,metodos){
    if(arguments.length != 2){ throw new Error ("Insuficientes argumentos para la interface")}
    this.nombre = nombre;
    this.metodos = [];
    for(let i=0,len=metodos.length;i<len;i++){
        if(typeof metodos[i] !== 'string'){throw new Error("No se pasaron nombres de metodos")};
        this.metodos.push(metodos[i]);
    }
}

// Clase estatica de metodos (o, metodo que chequea que un obj cumple con la interface):
Interface.asegurarImplementacion = function (obj){ 
    if(arguments.length < 2) { throw new Error("Interface.asegurarImplementacion con argumentos faltantes")};
    for(let i=1,len=arguments.length;i<len;i++){
        var interface = arguments[i];
        if(interface.constructor !== Interface){ throw new Error("Argumentos debe ser instancias de Interface")}
        for(let j=1,long=interface.metodos.length;j<long;j++){
            var metodo = interface.metodos[j];
            if( !obj[metodo] || typeof obj[metodo] !== 'function' ){
                throw new Error("El objeto NO implementa la interface "+interface.nombre+" metodo no encontrado:"+metodo)
            }
        }
    }    
}

// NOTA: EN ducktyping.js HAY EJEMPLO DE INTERFACE MAS SU IMPLEMENTACION
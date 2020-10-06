/*
Patron Strategy.
Ejemplo:
1- Una clase abstracta Pato y distintas clases de patos hijos (PatoCriollo, PatoRojo, PatoMadera,PatoGoma)
    estas clases hijo tienen/implementan dos interfaces: Volable (metodo volar) y Quackable (metodo quack)
    (2 interfaces en Java)
2- El diseño anterior presenta los problemas: si cada cierto tiempo se modifican los metodos, entonces hay 
    que modificar c/u de las clases hijas. Por otro lado podría darse duplicación de código si dos subcla-
    ses hijas tienen la misma forma de hacer volar() o quack()
3- Solucion: patron Strategy, poner dos atributos en la clase Padre abstracta que referencien a los metodos
    (en realidad a clases que implementan interfaces)
*/

// Interfaces:
class Interface{
    constructor(nombreInterface,nombreMetodos=[]){
        this.nombre= nombreInterface;
        this.metodos= [];

        for (let i = 0; i < nombreMetodos.length; i++) {
            if(typeof nombreMetodos[i]!=='string') throw new Error("Error de interface->metodos no son de tipo string");
            this.metodos.push(nombreMetodos[i])
        }
    }
    chequear(clase){
        if(clase){
            for (let i = 0; i < this.metodos.length; i++) {
                let nombreMetodo = this.metodos[i];
                if(!clase[nombreMetodo] || typeof clase[nombreMetodo]!=='function') 
                    throw new Error("Clase no implementa todos los metodos de la interfase");            
            }
        }else{
            throw new Error ("Se debe indicar el nombre de la clase")
        }        
    }
}
// medio al pedo lo de las interfaces porque al final lo de abajo no lo estoy usando
var comportamientoDeVuelo = new Interface('ComportamientoDeVuelo',['volar']);
var comportamientoDeQuack = new Interface('ComportamientoDeQuack',['quack']);

class VueloConAlas {
    volar(){console.log("Volando con alas!!")}
}
class VueloSinAlas {
    volar(){console.log("Volando sin alas!!")}
}
class QuackGrave {
    quack(){console.log("Quack->Grave!!")}
}
class QuackAgudo {
    quack(){console.log("Quack->Agudo!!")}
}

// Planteo inicial, diseño inicial:
class Pato {
    constructor(nombre,vuelo,quack){
        this.vuelo = vuelo;
        this.quack = quack;
        this.nombre = nombre;
    }
    nadar(){
        console.log('Pato nadando...')
    }
    display(){} // metodo abstracto

}
class PatoCriollo extends Pato {
    constructor(nombre){
        var vuelo = new VueloConAlas();
        var quack = new QuackAgudo();
        super(nombre,vuelo,quack)        
    }
    display(){
        console.log('Soy un PATO CRIOLLO')
    }
}
class PatoMadera extends Pato {
    constructor(nombre){
        var vuelo = new VueloSinAlas();
        var quack = new QuackGrave();
        super(nombre,vuelo,quack)        
    }
    display(){
        console.log('Soy un PATO DE MADERA')
    }
}
class PatoRojo extends Pato {
    constructor(nombre){
        var vuelo = new VueloConAlas();
        var quack = new QuackAgudo();        
        super(nombre,vuelo,quack)        
    }
    display(){
        console.log('Soy un PATO ROJO')
    }
}

var patito1 = new PatoCriollo('Juan Pedro Paton')
patito1.nadar();
patito1.display();
patito1.vuelo.volar();

// NOTA: medio absurdo crear las interfaces por que en estas últimas lineas como en la clase Pato
//       no llego a usarlas, en la clase abstracta Pato ( así como en javascript en  general ) no 
//       necesito declarar estrictamente los tipos de sus metodos, miembros, o atributos entonces 
//       el sentido de la interface se pierde un poco .En el ejercicio en  java sí  tenía sentido
//       porque cada clase hija de Pato heredaba esos atributos y podía asignarles las clases que
//       quisieran (clases que implementaban la interface correspondiente)
// Ejemplo de funcion que devuelve otra funcion
function F1(n){
    this.nombre = n;
    this.rol="Administrador"
    return function(){
        this.edad=0;
        console.log('->'+this.nombre+'<-');
    }
}

let a1 = F1('cesar');
a1(); // SI funciona (pero algo raro hace, creo q pone this.nombre en el scope global o algo así)
let a2 = new F1('juan'); // NOTA: por que "new"? no? (RTA: new es al pedo porque no se crea ningun objeto, F1 retorna una funcion=>el new es al pedo)
a2(); // Da "->cesar<-"  o undefined? (si antes no se hubiera creado a1)
let a11 = F1('jorgito');
a11(); // Da "->jorgito<-"  OK
a1();  // Da "->jorgito<-" => entonces todas las a1,a2,a11 apuntan a la misma funcion y va cambiando (y se va pisando) "this.nombre"
console.log("\x1b[36m%s", '-------------------------', '\x1b[0m')

// Solucion:
function Adornar2(n){
    const contexto = this;
    contexto.nombre = n;
    return function(){
        console.log('->'+contexto.nombre+'<-');
    }
}
let a3 = Adornar2('juan2');
a3(); 
let a4 = Adornar2('Carla');
a4();
a3(); // Da "->Carla<-" => entonces también como arriba, todas apuntan a la misma funcion"
console.log("\x1b[36m%s", '-------------------------', '\x1b[0m')

// BINDING IMPLÍCITO:
const hijo={
    nomb:"PUCHI",
    presentar(){console.log("hola, soy "+this.nomb)},
    madre:{
        apell:"MONTI",
        presentar(){console.log("hola, soy la mama "+this.apell)}
        /* también podía declararse como---->presentar:function(){console.log("hola, soy la mama "+this.apell)} */
    }
}
hijo.presentar();
hijo.madre.presentar();
console.log("\x1b[36m%s", '-------------------------', '\x1b[0m')

// BINDING EXPLÍCITO (apply, call, y bind):
function presentar(){console.log("me presento again, soy "+this.nomb)}
presentar.call(hijo);
presentar.apply(hijo);
const pres=presentar.bind(hijo);
pres();
console.log("\x1b[36m%s", '-------------------------', '\x1b[0m')

// NEW BINDING:
function Personita(n){
    this.nomb = n;
    this.edad = 0;
}
let h1=new Personita("PUCHI2") // se crea un nuevo objeto cuyo contexto puede referenciarse con "this"
console.log("\x1b[36m%s", '-------------------------', '\x1b[0m')

// LEXICAL BINDING (en las arrow functions el this se determina lexicamente):
const Hijo = {
    nomb : "PUCCHINNI",
    hijos: ['juan','jorge','maria'],
    presentar(){
        const cantHijos = this.hijos.length;
        const flia = this.hijos.map(e=>{
            return (e.toUpperCase() + ' hijo de '+this.nomb);
        });
        return (cantHijos +'----',flia)
    }
}
console.log(Hijo.nomb);
console.log(Hijo.presentar());
console.log("\x1b[36m%s", '-------------------------', '\x1b[0m')

function Persona(){
    this.apellido="perez";
    this.edad= 44;
    this.sumar=function(e){
        let var1="soy una variable de funcion"
        this.edad +=e
    }
    this.presentarse = ()=>{
        let var2="soy una variable de funcion anonima";
        console.log("hola, soy "+this.apellido)}
}
let p1 = new Persona();
let p2 = Persona;
p1.sumar(2);
p1.presentarse();
p1.sumar(3)
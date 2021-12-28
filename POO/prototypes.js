// Agregando metodos y atributos en el prototipo
function Persona1(nomb) {
    this.nombre = nomb;
    this.adorna = function(){ console.log('->'+this.nombre+'<-') }
}
Persona1.prototype.descripcion = function () { return 'Descripcion-->' + this.nombre }
Persona1.prototype.edad = 55;
var personaA = new Persona1('Juan');
var personaB = new Persona1('kokot');
console.log(personaA.descripcion());
console.log("personaA.edad: " + personaA.edad)
console.log(personaB.descripcion())
console.log("personaB.edad: " + personaB.edad)
personaA.adorna();

console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')
function Profesor (mat){
    this.materia=mat;
}
Profesor.prototype = new Persona1('caltriverio');
var profA = new Profesor('literatura');
console.log(profA.descripcion());
console.log("profA.edad: " + profA.edad)
profA.adorna()

// Viendo los prototipos cuando no hay constructor 
var objeto1 = {
    prop2: 'algo',
    prop3: { subProp1: 0 },
    prop4: function () { return this.prop2; },
};
console.log(objeto1.prop4());
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------');

// viendo el tema de  ...= variable || {objeto}
console.log("\x1b[36m%s\x1b[0m", '4-Miembros protegidos (que sean visibles solo para los herederos)');
function ConstructorPadre1(nombre, edad, protegido) {
    this.miembro1 = protegido || {campo1:'caracas'}; // si no viene nada en protegido le asigna un objeto
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = function (){console.log('Soy -> '+this.nombre)}
}
var hijo1 = new ConstructorPadre1('JUAN',22);
console.log('hijo1.nombre: '+hijo1.nombre)
console.log('hijo1.miembro1: '+JSON.stringify(hijo1.miembro1))

var hijo2 = new ConstructorPadre1('PEDRO',33,{formol:'fetttessta'})
console.log('hijo2.nombre: '+hijo2.nombre)
console.log('hijo2.miembro1: '+JSON.stringify(hijo2.miembro1))

console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')
function ConstructorHijo1 (nombre,edad,protegido,deporte){
    this.padre = ConstructorPadre1;
    this.padre(nombre,edad,protegido); //---->??por que ??
    /* Porque todo lo que se declaró en ConstructorPadre1 como: "this.blabla.." => ese THIS en el contexto de ConstructorHijo1 queda asociado a él (sera asi?) */
    /* (o...porque al hacer "new ConstructorHijo1(...)" la funcion constructora "ConstructorPadre1" que en definitva se invoca en este scope tambien se le hace un "new() )??" */
    /* Tambien porque al instanciar un objeto de "ConstructorHijo" => ¿Como hago para asignar los atributos "nombre", "edad", "protegido"? Bueno ésta es una
       forma de hacerlo */
    this.deporte = deporte;
    this.deportar = function (){console.log('Deporteo -> '+this.deporte)}
}
//ConstructorHijo1.prototype = new ConstructorPadre1();
var hijo3 = new ConstructorHijo1('juancito',334,'algo protegido','basquet');
hijo3.deportar();
hijo3.saluda();
console.log('hijo3 ',hijo3)

console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", '-Probando prototypes');

// LA CLASE PADRE
function Persona(n,e,s){
    this.nombre=n;
    this.edad=e;
    this.sexo=s;
    this.setNombre = function(n){ this.nombre=n};
    this.setEdad = function(e){this.edad=e}
    this.setSexo = function(s){this.sexo=s}
    this.cumpliranios = function(){++this.edad;}
    this.presentar = function(){ console.log('Soy '+this.nombre+' tengo '+this.edad+' años ('+this.sexo+')')}
}
let p1 = new Persona('cesar',44,'m');
p1.cumpliranios();
p1.presentar()

// LA CLASE HIJO
function Trabajador (p,s){
    this.puesto=p;
    this.sueldo=s;
    this.ahorros = 0;
    this.cometa=function(d){ this.ahorros += d; }
    this.cobrar=function(){this.ahorros+=this.sueldo}
    this.saldo= function(){console.log('Tengo ahorrados '+this.ahorros+'$')}
}
Trabajador.prototype = new Persona();//Forma1: pero sin hacer un seteo de propiedades en la construccion sino q despues las seteo aparte

let t1 = new Trabajador('administrativo',500);
t1.cobrar()
t1.saldo()
t1.cometa(100)
t1.saldo()
//t1.setNombre('juan carlos')
//t1.setEdad(88)
//t1.setSexo('f')
t1.presentar()
console.log('t1: ',t1)
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')

// LA CLASE HIJO
function Trabajador2 (p,s,n,e,sx){
    this.puesto=p;
    this.sueldo=s;
    this.ahorros = 0;
    this.Persona = Persona;
    this.Persona(n,e,sx);
    this.cometa=function(d){ this.ahorros += d; }
    this.cobrar=function(){this.ahorros+=this.sueldo}
    this.saldo= function(){console.log('Tengo ahorrados '+this.ahorros+'$')}
}
Trabajador2.prototype = new Persona();//Forma1: pero sin hacer un seteo de propiedades en la construccion sino q despues las seteo aparte

let t2 = new Trabajador2('operario',200,'juan carlos',24,'f');
t2.cobrar()
t2.saldo()
t2.cometa(100)
t2.saldo()
t2.presentar()
console.log('t2: ',t2);

var uno ="una var uno";
let dos=" un let dos"
const tres ="un const tres"
console.log('t2.isPrototypeOf(Persona)-> ',Persona.prototype.isPrototypeOf(t2))
console.log('t1.isPrototypeOf(Persona)-> ',t1.isPrototypeOf(p1))
console.log('t2.prototype-> ',t2.prototype)
console.log('t2.__proto__-> ',t2.__proto__)
console.log('t1.prototype-> ',t1.__proto__)
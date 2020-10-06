// Agregando metodos y atributos en el prototipo
function Persona1(nomb) {
    this.nombre = nomb
}
Persona1.prototype.descripcion = function () { return 'Persona->' + this.nombre }
Persona1.prototype.edad = 55;
var personaA = new Persona1('Juan');
var personaB = new Persona1('kokot');
console.log(personaA.descripcion());
console.log("Propiedad edad: " + personaA.edad)
console.log(personaB.descripcion())
console.log("Propiedad edad: " + personaB.edad)


// Viendo los prototipos cuando no hay constructor 
var objeto1 = {
    prop2: 'algo',
    prop3: {
        subProp1: 0,
    },
    prop4: function () { return this.prop2; },
};
console.log(objeto1.prop4())

// Prueba
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')

// viendo el tema de  ...= variable || {objeto}
console.log("\x1b[36m%s\x1b[0m", '4-Miembros protegidos (que sean visibles solo para los herederos)');
function ConstructorPadre1(nombre, edad, protegido) {
    this.miembro1 = protegido || {campo1:'caracas'}; // si no viene nada en protegido le asigna un objeto
    this.nombre = nombre;
    this.edad = edad
}
var hijo1 = new ConstructorPadre1('JUAN',22);
console.log('hijo1.nombre: '+hijo1.nombre)
console.log('hijo1.miembro1: '+JSON.stringify(hijo1.miembro1))

var hijo2 = new ConstructorPadre1('PEDRO',33,{formol:'fetttessta'})
console.log('hijo2.nombre: '+hijo2.nombre)
console.log('hijo2.miembro1: '+JSON.stringify(hijo2.miembro1))

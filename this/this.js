
const animal = {
    dieta: 'herbivora',
    ruido() { console.log('beeee'); },
    alimento() { console.log('dieta: ' + dieta) },                      // da error    
    alimento2() { console.log('dieta: ' + this.dieta) },                // no da error    
    alimento3: function () { console.log('dieta: ' + this.dieta) },     // no da error    
    //function alimento4 () { console.log('dieta:'+this.dieta)}, //--->definicion erronea (no se puede definir así)
    cumple: () => { console.log('come: ' + dieta) },                    // da error tambien aunque sea una arrow function    
    cumple2: () => { console.log('come: ' + this.dieta) }               // da "undefined"
}
animal.ruido();
//animal.alimento(); // comentado por provocar error
animal.alimento2();
animal.alimento3();
//animal.cumple(); // comentado por provocar error
animal.cumple2()

const adornar = () => { console.log('-->' + this.nombre + '<--') }
function Persona(nombre) {
    this.nombre = nombre;
    return function () { console.log('nombre de Persona: ' + this.nombre) }
}
function Persona2(nombre) {
    this.nombre = nombre;
    esto = this;
    return function () {
        console.log('nombre2: ' + esto.nombre)
        console.log('esto: ', esto)
    }
}
animal.alimento2();
const persona1 = new Persona('jhon');
persona1();
console.log('->persona1 es un new Persona()=> se creó algo?->persona1: ');
console.log(persona1); // -->persona1 es la funcion que retorno Persona (???)
const persona2 = new Persona2('john');
persona2();
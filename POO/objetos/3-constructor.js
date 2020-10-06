console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

// Forma 3: Mediante una función constructora (o simplemente constructor) + new()
console.log("\x1b[36m%s\x1b[0m", 'Forma 3 mediante constructor (patron Prototype?)')
function Persona1(nom, domic) {
    this.nombre = nom;
    this.domicilio = domic;
    this.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    this.getNombre = () => { return 'Nombre :' + this.nombre }
}
var persona1 = new Persona1('JUAN', { calle: 'ALSINA', nro: 111 });
console.log('personaC.nombre : ' + persona1.nombre)
console.log(persona1.getDomicilio())
console.log(persona1.getNombre() + '\n-----------------------------------------')
var persona2 = new Persona1('MARIO', { calle: 'GOYENA', nro: 222 });
console.log(persona2.getDomicilio())
console.log(persona2.getNombre() + '\n-----------------------------------------')
// chequeando que persona2 efectivamente no pisa a persona1
console.log(persona1.getDomicilio())
console.log(persona1.getNombre() )


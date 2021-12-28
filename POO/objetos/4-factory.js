console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

// Patron FACTORY para creacion de objetos:
console.log("\x1b[36m%s\x1b[0m", 'Forma 5 patron FACTORY')
function crearPersona(nombre, domicilio) {
    var persona = new Object();
    persona.nombre = nombre;
    persona.domicilio = domicilio;
    persona.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    persona.getNombre = () => { return 'Nombre :' + this.nombre }
    return persona;
}
var persona1 = crearPersona('JUAN', { calle: 'ALSINA', nro: 111 });
console.log('persona1.nombre : ' + persona1.nombre)
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
console.log("\x1b[36m%s\x1b[0m",'-----------------------------------------')

//Patron FACTORY mejorado (por cada objeto, antes, se hacia una nueva copia de la funcion de las funciones miembro)
console.log("\x1b[36m%s\x1b[0m", 'Forma 5.1 patron FACTORY con definicion de función miembro fuera del factory')
console.log("\x1b[36m%s\x1b[0m", ' (evitando que para cada objeto creado se haga una copia de la funcion aparte)')
function funcDomicilio() { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
function crearPersona2(nombre, domicilio) {
    var persona = new Object();
    persona.nombre = nombre;
    persona.domicilio = domicilio;
    persona.getNombre = () => { return 'Nombre :' + this.nombre };
    persona.getDomicilio = funcDomicilio;
    return persona;
}
var persona2 = crearPersona2('PEDRO', { calle: 'GOYENA', nro: 222 });
console.log('persona2.nombre : ' + persona2.nombre);
console.log(persona2.getDomicilio());
console.log(persona2.getNombre());

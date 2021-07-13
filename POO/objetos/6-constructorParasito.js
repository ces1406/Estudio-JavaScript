console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

// Constructor parasito:
//          esta mal? (el concepto en general o ésta implementación/ejemplo) por que leí que la función constructor
//          si devuelve algo esto no será tenido en cuenta, es como que se ignora cualquier "return" dentro del constructor
function Persona1(nomb, domic) {
    var obj = new Object();
    obj.nombre = nomb;
    obj.domicilio = domic;
    obj.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    obj.getNombre = () => { return 'Nombre :' + this.nombre }
    return obj;
}
var persona1 = new Persona1('JUAN', { calle: 'ALSINA', nro: 111 });
console.log("\x1b[36m%s\x1b[0m", 'Forma 6: Constructor parasito')
console.log("\x1b[36m%s\x1b[0m", '   leí que  si la función constructor devuelve  algo esto no será tenido en cuenta,')
console.log("\x1b[36m%s\x1b[0m", '   es como que se ignora cualquier "return" dentro del constructor (en este ejemplo')
console.log("\x1b[36m%s\x1b[0m", '   eso no pasó, de hecho si se devuelve el objeto indicado en el return)')
console.log("\x1b[36m%s\x1b[0m", '   Nota: el getNombre() es una arrow function con this -----> por eso tira undefined')
console.log('persona1: ',persona1)
console.log('persona1.nombre : ' + persona1.nombre)
console.log('persona1.obj: ', persona1.obj)
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
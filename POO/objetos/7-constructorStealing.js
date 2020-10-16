console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
// Constructor Stealing
console.log("\x1b[36m%s\x1b[0m", 'Forma 9: Constructor Stealing (el constructor llama a otro constructor con la funcion call() )')
function Persona1(nom, domic) {
    this.nombre = nom;
    this.domicilio = domic;
    this.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
    this.getNombre = () => { return 'Nombre :' + this.nombre }
}
function Persona2() { 
    Persona1.call(this,'JUAN',{calle:'ALSINA', nro:111}) 
} 
function Persona3(){
    Persona1.apply(this,['CARLOS',{calle:'PERON',nro:333}])
}
var persona1 = new Persona2();
var persona2 = new Persona2();
var persona3 = new Persona3();

console.log('persona1:')
console.log(persona1.getDomicilio())
console.log(persona1.getNombre());
console.log('persona2:')
console.log(persona2.getDomicilio())
console.log(persona2.getNombre())
console.log('persona3:')
console.log(persona3.getDomicilio())
console.log(persona3.getNombre())
persona1.nombre='MARIA'
console.log('persona1.nombre = "MARIA"')
console.log('persona1.getNombre()->'+persona1.getNombre())
console.log('persona2.getNombre()->'+persona2.getNombre());
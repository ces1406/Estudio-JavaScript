console.log("\x1b[31m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

//  Literal definiendo todo inicialmente dentro de la declaracion del objeto
console.log("\x1b[31m%s\x1b[0m", 'Forma 1 creacion literal');
var persona1 = {
    nombre: 'JUAN',
    domicilio: {
        calle: 'ALSINA',
        nro: 111
    },
    getDomicilio: function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; },
    getNombre: () => { return 'Nombre :' + this.nombre } //ERROR : aca this no apunta al objeto (por el uso de arrow functions)
};
console.log('persona1: ', persona1)
console.log('persona1.nombre : ' + persona1.nombre)
console.log(persona1.getDomicilio())
console.log(persona1.getNombre())
console.log("\x1b[31m%s\x1b[0m", '-----------------------------------------')

// Literal agregando luego de la declaracion del objeto
console.log("\x1b[31m%s\x1b[0m", 'Forma 2 literal agregando propiedades "on the fly"')
var persona2 = {};
persona2.nombre = 'PEDRO';
persona2.domicilio = { calle: 'GOYENA', nro: 222 };
persona2.getDomicilio = function () { return '->Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona2.getNombre = () => { return '->Nombre :' + this.nombre }//this.['nombre']}
console.log('persona2: ', persona2)
console.log('-personaD.nombre : ' + persona2.nombre)
console.log(persona2.getDomicilio())
console.log(persona2.getNombre())
console.log("\x1b[31m%s\x1b[0m", '-----------------------------------------')
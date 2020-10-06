console.log("\x1b[31m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

// Forma 2: con new Object() y agregandole propiedades on-the-fly
console.log("\x1b[31m%s\x1b[0m", 'Forma 2 con new Object():\n')
var persona = new Object();
persona.nombre = 'JUAN';
persona.domicilio = { calle: 'ALSINA', nro: 111 };
persona.getDomicilio = function () { return 'Calle: ' + this.domicilio.calle + ' al ' + this.domicilio.nro; };
persona.getNombre = () => { return 'Nombre :' + this.nombre } // Error: el this apuntara al contexto que lo contiene (en este caso "Global")
console.log('persona.nombre : ' + persona.nombre)
console.log(persona.getDomicilio())
console.log(persona.getNombre())
console.log("\x1b[31m%s\x1b[0m", '-----------------------------------------')
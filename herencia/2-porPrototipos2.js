// Herencia mediante prototipos
console.log("\x1b[36m%s\x1b[0m", "\nHERENCIA\n" + "-----------------------------------------");

// 2-Herencia mediante:  HijoConstructor.prototype= new PadreConstructor()
console.log("\x1b[36m%s\x1b[0m", '2-Herencia mediante:  "HijoConstructor.prototype= new PadreConstructor()":\n');

function Persona(nom, domic) {
  this.nombre = nom;
  this.domicilio = domic;
  this.getDomicilio = function () {
    return "Calle: " + this.domicilio.calle + " al " + this.domicilio.nro;
  };
  this.getNombre = () => {
    return "Nombre :" + this.nombre;
  };
}

function Usuario(nick) {
  this.apodo = nick;
}
Usuario.prototype = new Persona("JUAN", { calle: "ALSINA", nro: 111 }); // ¡¡¡ HEREDANDO DE Persona1 !!!

var persona1 = new Usuario("juancito");
console.log(persona1); // --->para observar en la consola del navegador
console.log("persona1.apodo : " + persona1.apodo);
console.log("persona1.nombre : " + persona1.nombre);
console.log("persona1.getDomicilio()" + persona1.getDomicilio());
console.log("persona1.getNombre()" + persona1.getNombre());
console.log("-----------------------------------------");

var persona2 = new Usuario("pedrin");
console.log(persona2); // --->para observar en la consola del navegador
console.log("persona2.apodo : " + persona2.apodo);
console.log("persona2.nombre : " + persona2.nombre);
console.log("persona2.getDomicilio()" + persona2.getDomicilio());
console.log("persona2.getNombre()" + persona2.getNombre());
console.log("-----------------------------------------");

persona2.__proto__.nombre = "PEDRO";
console.log(
  "Despues de crear persona1 y persona2, se modifica persona2.__proto__.nombre ( pisará a persona1):"
);
console.log("persona2.nombre : " + persona2.nombre);
console.log("persona2.getNombre()" + persona2.getNombre());
console.log("persona1.nombre : " + persona1.nombre);
console.log("persona1.getNombre()" + persona1.getNombre());

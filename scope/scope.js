var global = " SOY GLOBAL ";
let globalLet = "SOY -LET- GLOBAL";

function scope1() {
  var a1 = [1, 2, 3];
  console.log("scope1()->global: " + global);
  for (var i1 = 0; i1 < a1.length; i1++) {
    var value1 = a1[i1];
    console.log("value1: " + value1);
  }
  console.log("Fuera del for->value: " + value1);
  // o sea que value está disponible a un scope superior? RTA: Sí, porque var tiene alcance de funcion
  // (o en realidad "for" no está determinando ningun scope) --> de funcion
}
scope1();

function scope2() {
  var a2 = [1, 2, 3];
  for (var i2 = 0; i2 < a2.length; i2++) {
    let value2 = a2[i2];
    console.log("value2: " + value2);
  }
  //console.log("Fuera del for->value: "+value ) // -->ahora da ERROR RTA: Sí, porque let tiene alcance de bloque
}
scope2();

function scope3() {
  var a3 = 2;
  let b3 = 1;
  {
    var c3 = "**scope3->{c3}**";
    let v3 = "a";
    console.log("Dentro de {} -> a3: " + a3);
    console.log("Dentro de {} -> b3: " + b3);
  }
  console.log("Fuera del {} -> c3: " + c3);
  console.log("letGlobal->", globalLet);
  // let b3 = 8; // --> da ERROR (pero con "value2" en el for del scope2 no?)
  //console.log("Fuera del {} -> v: "+v ) // -->da ERROR
}
scope3();

//console.log("Fuera del todo -> a1: " + a1); //--> da ERROR
//console.log("Fuera del todo -> value1: " + value1); //--> da ERROR

var nombre = "susana";
function printStudent(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

printStudent(nombre);
printStudent("juan");
console.log(nombre);

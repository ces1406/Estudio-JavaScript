console.log('->declaración tardía -> sumar1(3,4) = '+sumar1(3,4));
// console.log('->declaración tardía- sumar2(3,4):'+sumar2(3,4));---->da Error

function sumar1(x,y){return x+y}
sumar2 = function (x,y) { return x+y} //->acá no funciona "declaracion tardia" porque antes que nada es una asignación
function sumar3(x,y){ 
    console.log('sumar3()->arguments: ',arguments)
    return sumar1.apply(this,arguments)
}
function sumar4(x,y){ return sumar1.call(this,arguments['0'],arguments['1'])} //podría haber puesto "sumar1.call(this,x,y)" que era lo mismo
function sumarDosVeces(func,val1,val2){
    return 2*func(val2,val1)
}


console.log('->funcion como parametro -> sumarDosVeces(sumar1,3,4)=' + sumarDosVeces(sumar1,3,4));
console.log('->Las funciones tienen las propiedades: ');
console.log('\tsumar2.length = cantidad de argumentos -->  ' + sumar2.length)
console.log('\tsumar2.prototype = la ubicacion de los metodos -->  ',sumar2.prototype)
console.log('->usando apply -> sumar3(3,1) = ' + sumar3(3,1))
console.log('->usando apply -> sumar4(3,41) = ' + sumar4(3,41))

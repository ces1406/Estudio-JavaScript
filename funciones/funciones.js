console.log('->declaración tardía- sumar1(3,4):'+sumar1(3,4));
// console.log('->declaración tardía- sumar2(3,4):'+sumar2(3,4));---->da Error

function sumar1(x,y){return x+y}

sumar2 = function (x,y) { return x+y} //->acá no funciona "declaracion tardia" porque antes que nada es una asignación

function sumarDosVeces(func,val1,val2){
    return 2*func(val2,val1)
}

console.log('->funcion como parametro- sumarDosVeces(sumar1,3,4):'+sumarDosVeces(sumar1,3,4));

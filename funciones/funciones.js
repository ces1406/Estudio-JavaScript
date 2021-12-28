console.log('->declaración tardía -> sumar1(3,4) = '+sumar1(3,4));
// console.log('->declaración tardía- sumar2(3,4):'+sumar2(3,4));---->da Error

function sumar1(x,y) { return x+y; }

const sumar2 = function (x,y) { return x+y; } //->acá no funciona "declaracion tardia" porque antes que nada es una asignación

function sumar3(x,y) { 
    console.log('sumar3()->arguments: ',arguments);
    return sumar1.apply(this,arguments);
}

function sumar4(x,y) { return sumar1.call(this,arguments['0'],arguments['1']); } //podría haber puesto "sumar1.call(this,x,y)" que era lo mismo

function sumarDosVeces(func,val1,val2){ return 2*func(val2,val1); }

console.log('->funcion como parametro -> sumarDosVeces(sumar1,3,4)=' + sumarDosVeces(sumar1,3,4));
console.log('->Las funciones tienen las propiedades: ');
console.log('\tsumar2.length = cantidad de argumentos -->  ' + sumar2.length)
console.log('\tsumar2.prototype = la ubicacion de los metodos -->  ',sumar2.prototype)
console.log('->usando apply -> sumar3(3,1) = ' + sumar3(3,1))
console.log('->usando apply -> sumar4(3,41) = ' + sumar4(3,41))

for(var i=0;i<3;i++){
    console.log('->i:'+i)
    setTimeout(function(){console.log('i: '+i)},1500)
}

function add1(x){
    ++x;
    return ++x;
}
let param1 = 5;
console.log('add1(param1): ',add1(param1));
console.log('param1: ',param1) //la funcion add1() no modifico a param1

// CLOSURES:
function fExterna(p1){
    return function (o1,o2){
        var a = o1[p1];
        var b = o2[p1];
        if(a>b){
            return ("el primer objeto  tiene la propiedad ->"+p1+"<- mayor")
        }else{
            return ("el segundo objeto tiene la propiedad ->"+p1+"<- mayor")
        }
    }
}

var comparar = fExterna('edad');
console.log("->comparar({edad:50},{edad:66}): ",comparar({edad:50},{edad:66}))
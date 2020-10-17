// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function caracteres(string){
    if (typeof string === 'string'){
        return string.length;
    }
    return 'error en el parametro'
}
console.log('caracteres ({coso:"string"}): '+caracteres({coso:'string'}))
console.log('caracteres (322): '+caracteres(322))
console.log('caracteres (true): '+caracteres(true))
console.log('caracteres ([]): '+caracteres([1,2,'string',8,'holis']))
console.log('caracteres (null): '+caracteres(null))
console.log('caracteres (string): '+caracteres('string'))

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortar(cadena,long){
    if (typeof cadena === 'string'&& typeof long ==='number'){
        let rta ='';
        for(let i=0;i<long;i++){ rta +=cadena[i]}
        return rta
    }
    return 'error en el parametro'    
}
function recortar2(cadena,long){
    if (typeof cadena === 'string'&& typeof long ==='number'){
        return cadena.substring(0,long)
    }
    return 'error en el parametro'    
}
console.log("recortar('cacaroto',4): "+recortar('cacaroto',4));
console.log("recortar2('cacaroto',4): "+recortar2('cacaroto',4));
console.log("recortar('cacaroto','4'): "+recortar2('cacaroto','4'));

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
//pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function separar(cadena,sepdor){
    if (typeof cadena === 'string'&& typeof sepdor ==='string'){
       return cadena.split(sepdor);
    }
    return 'error en el parametro'
}
console.log("separar('caca roto coss',' '): "+separar('caca roto coss',' '));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetir(cadena,cant){
    let rta='';
    if (typeof cadena === 'string'&& typeof cant ==='number'){
        for(let i=0;i<cant;i++){
            rta=rta.concat(cadena)   
            //rta += cadena    //<----otra opcion
        }
        return rta;
    }
    return 'error en el parametro'
}
console.log('repetir():'+repetir(' rotocoss',3))

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function invierte(cadena){
    let rta = Array.from(cadena).reverse()
    let resp =''
    for (let i=0;i<rta.length;i++){
        resp += rta[i]
    }
    return resp;
}
console.log('invierte("programon"): '+invierte('programon'))

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
//pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function contar(cadena,pal){
    let vec = cadena.split(' ')
    let count=0;
    for(let i=0; i<vec.length; i++){
        if(vec[i]===pal)count++
    }
    return count
}
console.log("contar('es hoy o es cuando es de es sea estar','es'): "+contar('es hoy o es cuando es de sea es estar','es'))

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
//pe. mifuncion("Salas") devolverá true.
function palind(cadena){
    let vec1 = Array.from(cadena);
    let vec2 = Array.from(cadena).reverse();
    let cont = 0;
    for(let i=0; i<cadena.length; i++){
        if(vec1[i]===vec2[i]){
            cont++; 
        }
    }
    return (cont===cadena.length)?'ok':'no ok'
}
console.log("palind('escaparapacse'): "+ palind('escaparapacse'))

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
function elimine(cadena,patron){
    let rta = '';
    let marca=0;
    for(let i=0; i<cadena.length; i++){
        let cadAux = cadena.substring(i,i+patron.length);
        if(cadAux.localeCompare(patron)===0){
            rta += cadena.substring(marca,i);
            marca = i+patron.length;
        }
        if(i==cadena.length-1){
            if(marca!==cadena.length-1-patron.length){
                rta += cadena.substring(marca,cadena.length)
            }
        }
    }
    // otra opcion mas corta:
    /*let vec = cadena.split(patron);
    let rta = '';
    for(let i=0; i<vec.length; i++){
        rta += vec[i]
    }*/
    return rta
}
console.log('elimine("33xyz1, xyz2, xyz3, xyz4 y xyz5aabbbbcxyz", "xyz"): ',elimine("33xyz1, xyz2, xyz3, xyz4 y xyz5aabbbbcxyz", "xyz"))

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function aleatoria(){
        return (Math.floor(Math.random()*100))%99+501
}
console.log('aleatoria(): '+aleatoria())

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
//    pe. miFuncion(2002) devolverá true.
function capicua(num){
    vecAux1 = Array.from(num.toString());
    vecAux2 = vecAux1.slice().reverse();
    console.log('vec1: '+vecAux1)
    console.log('vec2: '+vecAux2)
    for(let i=0; i<vecAux1.length; i++){
        //console.log('')
        if(vecAux1[i]!==vecAux2[i]){
            return 'no capicua';
        }
    }
    return 'capicua'
}
console.log(capicua(545))

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
//    se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = function f1 (n){
    if(n===0||n===1){
        return 1;
    }
    return n*f1(n-1)
}
console.log('factorial(5): '+factorial(4))

//->Ejercicios 12 a 16 muy faciles<-
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//    pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
function anios(fecha){
    return (new Date().getFullYear())-fecha.getFullYear()
}
console.log(anios(new Date(1944,4,23)))

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
//    pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function cuadra(vec){
    return vec.map(e => e*e);
}
console.log('cuadra([1,4,5]): ',cuadra([1,4,5]))

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
//    pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
function maymen(vec){
    vec.sort((a,b)=>a-b)
    return [vec[0],vec[vec.length-1]]
}
console.log(maymen([244,3,445,5,6,78,99,9]))

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números 
//    pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
function dosVec(vec){
    vecPar = vec.filter((valor,indice,vec)=>{
        return valor%2===0
    })
    vecImpar = vec.filter((valor,indice,vec)=>{
        return valor%2!==0
    })
    return {pares:vecPar,impares:vecImpar}
}
console.log(dosVec([2,3,1,6,8,9]))

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
    /*let rta = '';
    for(let i=0; i<cadena.length; i++){
        let cadAux = cadena.substring(i,i+cadena.length);
        if(cadAux.localeCompare(patron)===0){
            rta += cadena.substring(i,)
        }
    }*/
    // otra opcion mas corta:
    let vec = cadena.split(patron);
    let rta = '';
    for(let i=0; i<vec.length; i++){
        rta += vec[i]
    }
    return rta
}
console.log('elimine("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"): ',elimine("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
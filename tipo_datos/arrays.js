var array1=[99,3,1500,31,1,1,6,777,88,8990];
var array2=[{name:'juan',edad:11},{name:'jose',edad:22},{name:'coco',edad:77},{name:'maria',edad:66},{name:'marta',edad:3}];
var persona1 = {name:'jose',edad:22}



//------------------------------------------array.toString()-------------------------------------------------
console.log("\x1b[35m%s\x1b[0m", '------------------------------------------array.toString()-------------------------------------------------')
console.log('array2.toString(): '+array2.toString())
console.log('array2.toLocaleString(): '+array2.toLocaleString())
console.log('array1.toString(): '+array1.toString())
//-------------------------------------------array.join()----------------------------------------------------
console.log("\x1b[35m%s\x1b[0m", '-------------------------------------------array.join()----------------------------------------------------')
console.log('array2.join("-"): '+array2.join('-'))
console.log('array1.join("-"): '+array1.join('-'))
//-------------------------array.push() : agrega al final del array-----array.pop() : saca el último elemento-----------------------------
console.log("\x1b[35m%s\x1b[0m", '------------------------------------array.push()-----array.pop()-------------------------------------------')
console.log('array2(ANTES DE->pop): ',array2)
let ultimoSacado = array2.pop()
console.log('Elemento pop()ed: ',ultimoSacado);
console.log('array2(LUEGO DE->pop): ',array2)
let longArray = array2.push({name:'PEQUE',edad:99})
console.log('Longitud array-push()ed: ',longArray)
console.log('array2(LUEGO DE->push): ',array2)
//-------------------------array.shift() : saca el 1er. elemento-----array.unShift() : agrega al inicio del array------------------------
console.log("\x1b[35m%s\x1b[0m", '----------------------------------array.shift()-----array.unShift()---------------------------------------')
let primeroSacado = array2.shift();
console.log('Elemento shift()ed: ',primeroSacado);
console.log('array2(DESPUES DE->shift): ',array2)
let arrayUnshift = array2.unshift({name:'KRISTINA',edad:55})
console.log('array2(DESPUES DE->unShifth): ',array2)



//--------------------------------------array.indexOf(valorNumerico)----------------------------------------
console.log("\x1b[35m%s\x1b[0m", '--------------------------------------array.indexOf(valorNumerico)----------------------------------------')
console.log("array2.indexOf({name:'coco',edad:77}: "+array2.indexOf({name:'coco',edad:77}));
console.log("array1.indexOf(6): "+array1.indexOf(6))
console.log("indexOf es metodo de datos tipo String ??")
//---------------------------------------array.findIndex(funcion)-------------------------------------------
console.log("\x1b[35m%s\x1b[0m", '---------------------------------------array.findIndex(funcion)-------------------------------------------')
console.log("array2.findIndex(): "+array2.findIndex(a=>a.name=='coco'));
//------------------------------------array.find(valor,indice,array)----------------------------------------
console.log("\x1b[35m%s\x1b[0m", '------------------------------------array.find(valor,indice,array)----------------------------------------')
function encontrar (nombre){
    return (
        array2.find((valor,indice,vector)=>{
            /*console.log('valor: ',valor);
            console.log('indice: '+indice);
            console.log('vector: '+JSON.stringify(vector))*/
            return valor.name === nombre
        }
    ))
}
console.log('Buscar "coco"->encontrar("coco"): ',encontrar('coco'))



//-----unArray.splice(posDondeAgregar,cantElementosARemover,elementoAAgregar1,elementoAAgregar2,....)-------
console.log("\x1b[35m%s\x1b[0m", '--------splice(posDondeAgregar,cantElementosARemover,elementoAAgregar1,elementoAAgregar2,....)-----------')
console.log('array2(ANTES DE->splice): ',array2)
personas = [{name:'Lautardo',edad:30},{name:'Sermgeco',edad:20},{name:'Barado',edad:10}]
array2.splice(2,1,{name:'Armando',edad:0})
console.log('array2(LUEGO DE->splice): ',array2)
array2.splice(2,0,personas);
console.log('array2(LUEGO DE->splice(2,0,arrayDepersonas)): ',array2)
//-----------------------------var unArray = array.concat(arra1,arra2,.....)-------------------------------
console.log("\x1b[35m%s\x1b[0m", '-----------------------------var unArray = array.concat(arra1,arra2,.....)-------------------------------')
var unArray = array2.concat([{name:'zaaaa',edad:1},{name:'zbbbbb',edad:2}],[{name:'Zaaaa',edad:3},{name:'Zbbbbb',edad:3}],[{name:'Yzaaaa',edad:5},{name:'Yzbbbbb',edad:5}])
console.log('unArray: ',unArray)
//------------------------------var unArray = array.slice(posInicio,posFinal)------------------------------
console.log("\x1b[35m%s\x1b[0m", '-----------------------------var unArray = array.slice(posInicio,posFinal)-------------------------------')
let array3 = array2.slice();
console.log('array3 = array2.slice() : ',array3)
console.log('array2.slice(2,3): ',array2.splice(2,1))
console.log('array2(LUEGO DE->splice(2,1)): ',array2)


//-------------------------------------------array.reverse()-----------------------------------------------
console.log("\x1b[35m%s\x1b[0m", '--------------------------------unArray = array.reverse()-----------------------------------------------')
console.log('array1: '+JSON.stringify(array1))
console.log('array1.reverse(): '+JSON.stringify(array1.reverse()))
console.log('array2.reverse(): '+JSON.stringify(array2.reverse()))
//---------------------------------------array.sort()---ORDEN ALFABETICO-----------------------------------
console.log("\x1b[35m%s\x1b[0m", '---------------------------------------array.sort()---ORDEN ALFABETICO-----------------------------------')
//console.log('array1: ',array1)
console.log('array1.sort(): '+JSON.stringify(array1.sort()))
//--------------------------array.sort(FUNCION DE COMPARACION ENTRE 2 ELEMENTOS)---------------------------
console.log("\x1b[35m%s\x1b[0m", '-------------------------array.sort(FUNCION DE COMPARACION ENTRE 2 ELEMENTOS)---------------------------')
console.log('array1.sort(): '+JSON.stringify(array1.sort((a,b)=>{return a-b})))
//NOTA: la funcion de comparacion debe devolver: 0-->iguales NroPositivo-->a>b NroNegativo-->a<b
console.log('array2(antes de ordenar): ',array2)
array2.sort((a,b)=>a.edad-b.edad)
console.log('array2(despues de ordernar): ',array2)



//-----------------------------------------array.foreach(Funcion)------------------------------------------
console.log("\x1b[35m%s\x1b[0m", '-----------------------------------------array.foreach(Funcion)------------------------------------------')
array2.forEach(e=>console.log('ADORNANDO-->'+e.name+"<--"))
//-----------------------------------unArray = array.map(elemento=>{...})----------------------------------
console.log("\x1b[35m%s\x1b[0m", '-----------------------------------unArray = array.map(elemento=>{...})----------------------------------')
var array4 = []
array4 = array2.map(elem=>{
    let newElem = elem;
    newElem.rol = 'usuario' //SE TERMINA AFECTANDO A array2
    return newElem
})
doblar =function (elem){
    return elem.edad * 2;
}
var array44 = array2.map(doblar)
console.log('array4: ',array4)
console.log('array44: ',array44)
console.log('array3: ',array3)
let array33 = array3.map(elem=>{
    /*let newElem;
    newElem.edad = elem.edad;
    newElem.name = elem.name;
    newElem.sueldo = 244;
    return newElem*/
    console.log('map->array3->elem: '+elem.edad)
    return elem.name
})
console.log('array3: ',array3)
console.log('array33: ',array33)
//---------------------------------unArray = array.filter(funcion)-----------------------------------------
console.log("\x1b[35m%s\x1b[0m", '--------------------------------unArray = array.filter(funcion)-----------------------------------------')
array5 = array2.filter((valor,indice,vec)=>{
    return valor.edad>0
})
console.log('array5: ',array5)
//--------------------------------unArray = array.reduce(function)-----------------------------------------
//-----------------Itera sobre cada elemento del arrray reduciendolo a un solo valor-----------------------
//-------------------NO devuelve un array sino la iteracion sobre el ultimo elemento-----------------------
console.log("\x1b[35m%s\x1b[0m", '---------------------unArray = array.reduce(function)->reduce a un único valor--------------------------')
console.log('array2: ',array2)
console.log('-----------------------------------')
arrayReducidoAUnElemento = array2.reduce((acumulador,valorActual,indice,valorInicial)=>{
    //acumulador acumula el valor devuelto en la iteracion anterior (o el valorInicial en la primera iteracion)
    //valor actual es el elemento actual
    //indice->idem(obvio)
    //valor inicial->un valor inicial o semilla
    //acumulador += valorActual.edad
    console.log('acumulador: ',acumulador);
    console.log('valorAcutal: ',valorActual);
    console.log('indice: ',indice);
    console.log('valorInicial: ',valorInicial)
    console.log('-----------------------------------')

    return {name:acumulador.name,edad:valorActual.edad+acumulador.edad,rol:acumulador.rol}
})
console.log('arrayReducidoAUnElemento: ',arrayReducidoAUnElemento)

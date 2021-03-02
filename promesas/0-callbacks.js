// Esta funCallback actúa como un "llamador demorado(en 3 segs) de funcion(que viene como parametro) 
// con dos argumentos (el valor parametro y su cuadrado)"
function funCallback(valor, funcion){
    setTimeout(()=>{
        funcion(valor,valor*valor)
    }, 3000);
}

// Funciones parámetros: 
function funcionParametro1(dato1,dato2){
    console.log(dato1+"^2 = "+dato2)
}
function funcionParametro2(dato1,dato2){
    let result= dato2*dato2;
    console.log(dato1+"^4 = "+result)
}

// Pruebas de ejecución de la funCallback():
funCallback(2,funcionParametro1)
funCallback(2,funcionParametro2)

// El callback-hell: 
funCallback(5,(arg1,arg2)=>{
    console.log("--> "+arg1+" * "+arg1+" = "+arg2)
    funCallback(arg2,(val1,val2)=>{
        console.log("--> "+val1+" * "+val1+" = "+val2)
        funCallback(val2,(param1,param2)=>{
            console.log("--> "+param1+" * "+param1+" = "+param2)
        })
    })
})
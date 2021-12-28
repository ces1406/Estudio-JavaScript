const {prm1,prm2} = require('./promesasExport')
const vec1=[
    {nombre:'juan',edad:10},
    {nombre:'jose',edad:14},
    {nombre:'ferchu',edad:5},
    {nombre:'maria',edad:17},
    {nombre:'carla',edad:51},
    {nombre:'ana',edad:60},
    {nombre:'jorge',edad:10},
]
var acumulada = 0;

var promesa = function(p){
    return new Promise((res,rej)=>{
        console.log('->promesa<-');
        setTimeout(res, 2000,p.edad);
    })
}

// NO FUNCIONA: (no se queda esperando en el await)
function f1(){
    vec1.forEach(async (e) => {    
        console.log("\x1b[36m%s\x1b[0m",'->elemento: {nombre: '+e.nombre+' ,edad: '+e.edad+'}')
        console.log('\t->antes de la promesa<-');
        acumulada += await prm1(e.edad)
        console.log('\t->despues de la promesa<-');
        console.log('acumulada: '+acumulada)
    });
}
// SÍ FUNCIONA:
async function f2(){
    for await(const e of vec1){
        console.log("\x1b[36m%s\x1b[0m",'->elemento: {nombre: '+e.nombre+' ,edad: '+e.edad+'}')
        console.log('\t->antes de la promesa<-');
        acumulada += await prm1(e.edad)
        console.log('\t->despues de la promesa<-');
        console.log('acumulada: '+acumulada)
    }
}
// SÍ FUNCIONA:
async function f3(){
    for (const e of vec1){
        console.log("\x1b[36m%s\x1b[0m",'->elemento: {nombre: '+e.nombre+' ,edad: '+e.edad+'}')
        //console.log('\t->antes de la promesa<-');
        //acumulada += await prm1(e.edad)
        acumulada += await promesa(e)
        //console.log('\t->despues de la promesa<-');
        console.log('acumulada: '+acumulada)
    }
}

//f1();
//f2();
f3();
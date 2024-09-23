let mapa = new Map();
let obj1={r:0,g:1,b:2}

mapa.set("nombre","Juan")
mapa.set("nombre","Juan")
mapa.set("apellido","Lopes")
mapa.set("edad",44)
mapa.set(obj1,22)

console.log('mapa: ' ,mapa)
console.log(mapa.size)
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"))
mapa.set("nombre","Jose")
console.log(mapa.get("nombre"))
console.log('mapa.get({r:0,g:1,b:2})',mapa.get(obj1))
console.log('mapa.get("{r:0,g:1,b:2}")',mapa.get('{r:0,g:1,b:2}'))
console.log('mapa.has({r:0,g:1,b:2})',mapa.has({r:0,g:1,b:2}))
console.log('mapa.has(obj1)',mapa.has(obj1))
mapa.delete("nombre")
console.log('mapa:  ',mapa)
// las keys pueden no ser de tipo String:
/* mapa.set(20,"numero veinte")
mapa.set({key:'coso',value:44},"objeto valor")

for(let[key,value]of mapa){
    console.log('key: '+key+' => valor: '+value)
} */
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------------------------');
mapa.set("edad",434)
let v = mapa.get("edad");
console.log('v: ',v)
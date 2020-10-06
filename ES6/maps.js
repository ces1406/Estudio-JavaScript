let mapa = new Map();

mapa.set("nombre","Juan")
mapa.set("apellido","Lopes")
mapa.set("edad",44)
console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"))
mapa.set("nombre","Jose")
console.log(mapa.get("nombre"))
mapa.delete("nombre")

// las keys pueden no ser de tipo String:
mapa.set(20,"numero veinte")
mapa.set({key:'coso',value:44},"objeto valor")

for(let[key,value]of mapa){
    console.log('key: '+key+' valor: '+value)
}

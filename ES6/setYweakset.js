const set1 = new Set([1,1,'1',2,'palabra1',44,'una frase',3,'palabra1',{clave:4,valor:'caca'},{clave:4,valor:'caca'},{clave:4,valor:'cacar'}])
console.log('set1: ',set1)
console.log('set1.size: '+set1.size)
console.log('set1.has("palabra1"): '+set1.has('palabra1'))
console.log('set1.add("hola mundo"): '+JSON.stringify(set1.add('hola mundo')))
console.log('set1.add({name:"carlos",edad:88}): '+JSON.stringify(set1.add({name:'carlos',edad:88})))
console.log('set1: ',set1)
console.log('set1.delete("palabra1"): '+set1.delete('palabra1'))
console.log('set1.delete("1"): '+set1.delete('1'))
console.log('set1: ',set1)

const vec2 = Array.from(set1)
console.log('vec2: ',vec2)

console.log('---------------------------------------------');
if('cad'){ console.log('if(cad) es true')}
if(333){console.log('if(333) es true')}
if(0){}else{console.log('if(0) es false')}
if(''){}else{console.log('if("") es false')}
if(null){}else{console.log('if(null) es false')}
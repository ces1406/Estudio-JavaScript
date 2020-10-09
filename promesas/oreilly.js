var ciudades =['Buenos Aires','Cordoba','La Plata','Rosario','Usuahia']

// Esto también es una callback:
function callback1 (param){
    console.log('ciudad de --> '+param)
}
//ciudades.forEach(callback1)

/*
    Las callbacks pueden ser invocadas sincronamente (la anterior) o asincronamente (dió el ejemplo de window.requestAnimationFrame())
*/

// Ejemplo síncrono de Node:
var fs = require('fs');
var timestamp = new Date().toString();
var contents;
// Escritura y lectura del mismo archivo de forma sincrona (sino->error)
fs.writeFileSync('date.txt',timestamp);
contents = fs.readFileSync('date.txt');
console.log('Se leyó el archivo creado: '+contents)
fs.unlink('date.txt',err=> { if (err) throw err; });

// Ejemplo asíncrono (mejor dicho usando funciones asíncronas + callbacks) en Node:
fs.writeFile('date2.txt','OTRA COSA',err=>{
    if (err) throw err;
    fs.readFile('date2.txt',(err,contenido)=>{
        if(err) throw err;
        console.log('contenido pseudo-asincrono: '+contenido)
        fs.unlink('date2.txt',err=> { if (err) throw err; });
    })
})

console.log('SOY LA ULTIMA LINEA DEL SCRIPT ')
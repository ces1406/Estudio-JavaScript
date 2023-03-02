var fs = require('fs');
var readline = require('readline');
var path = require('path')

var salida = fs.createWriteStream('escript2.sql',{flags:'a'});
salida.write('INSERT INTO unaApuntes (autores,titulo,materia,dirurl,catedra,fechaSubida,usuario) VALUES  \n');
var cont = fs.readFileSync('unaApuntesSql4.csv','utf-8');
 let lineas = cont.split(/\r?\n/);
lineas.forEach( (linea)=>{
    let campos = linea.split('*');
    let nueva = "('"+campos[0]+"','"+campos[1]+"','"+campos[2]+"','"+campos[3]+"','"+campos[4]+"',"+campos[5]+","+campos[6]+'),\n';
    salida.write(nueva) 
});

/* let lineas = cont.split("*")
console.log('lineas: ',lineas.length) */
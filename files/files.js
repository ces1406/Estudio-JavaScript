var fs = require('fs');
var readline = require('readline');
var path = require('path')

/*var lector = readline.createInterface({
    input:fs.createReadStream(path.join(__dirname,'unaApuntes.csv'))
})*/
/*var autores = readline.createInterface({
    input:fs.createReadStream(path.join(__dirname,'histDeLaCult1CastilloColAutor.csv'))
});
var enlaces = readline.createInterface({
    input:fs.createReadStream(path.join(__dirname,'histDeLaCult1CastilloColLinks.csv'))
});
var titulos = readline.createInterface({
    input:fs.createReadStream(path.join(__dirname,'histDeLaCult1CastilloColTitulos.csv'))
});*/
var arch = readline.createInterface({
    input:fs.createReadStream(path.join(__dirname,'histDeLaCult1CastilloCols.csv'))
});

var escritor = fs.createWriteStream(path.join(__dirname,'hdlacult1castillosql.txt'));
//var escritor = fs.createWriteStream(path.join(__dirname,'histDeLaCult1CastilloColEnlaces.csv'));

/*lector.on("line", linea =>{    
    let pals = linea.split('","');
    let siete = (pals[7]==undefined)?'NULL':('"'+pals[7]);    
    let seis = (pals[7]==undefined)?('"'+pals[6]):('"'+pals[6]+'",'); 
    let cadena = '("'+pals[1]+'","'+pals[2]+'","'+pals[3]+'",'+seis+siete+',CURRENT_TIMESTAMP(),1),\n';
    escritor.write(cadena)
});*/
let linea0= "INSERT INTO unaApuntes (autores,titulo,materia,dirurl,catedra,fechaSubida,usuario) VALUES \n";
escritor.write(linea0);
arch.on("line", linea =>{    
    let ind = linea.indexOf('https')
    let fin = linea.indexOf('download')
    //console.log('indice: '+linea.slice(ind,linea.length))
    //console.log('arch  : '+linea.slice(0,ind))
    let materia ='Historia de la Cultura I (Plan 443/02) (27)';
    let autor = (linea.slice(0,ind-1)=='')?'NULL':linea.slice(0,ind-1);//+'\n';
    let link = linea.slice(ind,fin+8)
    let titulo = linea.slice(fin+9,linea.length)
    let cadena = '("'+autor+'","'+titulo+'","'+materia+'","'+link+'","Castillo"'+',CURRENT_TIMESTAMP(),1),\n';
    if (autor == undefined|| autor ==''){
        autor= 'NULL'
    }

    //console.log(cadena)
    
    escritor.write(cadena)
});


//escritor.end();


/*fs.readFile(path.join(__dirname,'unaApuntes.csv'),'utf-8',(err,data)=>{
    if(err){
        return console.log('error->'+err)
    }else{
        console.log(data)
    }
})*/
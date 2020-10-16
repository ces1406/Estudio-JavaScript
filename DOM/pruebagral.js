// 1- Que en cada sector al pasar el mouse se resalte:
var sectores = document.getElementsByClassName('sector');
var sectoresDiv = document.getElementById('idSectores');
sectoresDiv.style.backgroundColor = '#07232C';
sectoresDiv.style.color = '#C4BEA4';
//console.log('sectoresDiv.style: '+JSON.stringify(sectoresDiv.style))
//sectoresDiv.style = 'margin:0.5em 0.5em 0.5em 0.5em';

for(let sector of sectores){
    console.log("sector->",sector)
    sector.addEventListener('mouseenter',resaltar);
    sector.addEventListener('mouseleave',desresaltar);
}

function resaltar (e){
    //console.log('this: ',this)
    this.style='background-color: #222A36; color:#DAC462'
}
function desresaltar (e){
    //console.log('this: ',this)
    this.style='background-color: #07232C;color:#C4BEA4'
}
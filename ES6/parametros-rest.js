function sumatoria(a,...b){
    let resultado = a;
    b.forEach( x=>{ resultado += x})
    return resultado;
}

console.log('sumatoria(3,4,5,6,7,1): ',sumatoria(3,4,5,6,7,1))
function* iterable(){
    let a=2;
    let c = 4 + a;
    console.log('1) c = ' + c)
    yield "primer return (para el proximo next() se ejecuta a partir de aca)";
    c++;
    console.log('2) c = ' + c)
    yield "segundo return (para el proximo next() se ejecuta a partir de aca)";
    c++;
    console.log('3) c = ' + c)
    yield "tercer return (para el proximo next() se ejecuta a partir de aca)";
}

let iterador = iterable();
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
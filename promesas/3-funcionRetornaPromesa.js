// Ejemplo de creación y uso de una promesa, con una funcion que retorna una promesa.

// Nota: abajo la funcion "devuelve" una promesa, no es en sí una promesa.
//       Puede servir para pasar un parametro a la promesa, se le pasa a la funcion y ésta lo pone en la promesa
function demora(time) {
    return new Promise((res, rej) => {
        console.log('->function demora (' + time + ')')
        if (isNaN(time)) {
            rej(new Error('parametro debe ser un numero'))
        } else {
            setTimeout(res, time);
        }
        // Nota: no entendía porque le pasa a setTimeout "res", ya que res no es una funcion ni nada, en realidad
        //       lo que esta haciendo con setTimeout(res<-??? es despues de una time cant de tiempo resolve la promesa
        //       Mas claro seria: setTimeout(()=>res(),time)
    })
}

// Funciones que implementen la promesa:
function func1() {
    console.log('en funcion 1');
    demora(2000)
        .then(() => console.log('dentro de func1.then'))
        .catch(err => console.log('ERRORR: ' + err));
}
function func2(param) {
    console.log('en funcion 2');
    demora(param)
        .then(() => console.log('dentro de func2.then'))
        .catch(err => console.log('ERRORR: ' + err));
}

const prom1 = new Promise((res, rej) => {
    console.log('\t---->promesa pura (sin funcion creadora)<----')
    let j = 5;
    while (j > 1) {
        let i = 1000000000;
        while (i > 1) { i--; }; //demorar 
        j--;
        console.log('\tprom1->' + j);
    }
    res();
})
function func3() {
    console.log('func3: ')
    prom1
        .then(() => console.log('->prom1.then'))
        .then(() => {
            console.log('\t---->promesa pura (sin funcion creadora)<----')
            let j = 6;
            while (j > 1) {
                let i = 1000000000;
                while (i > 1) { i--; }; //demorar 
                j--;
                console.log('\t->' + j);
            }
        })
        .then(() => console.log('->prom1.then.then.then'))
        .then(()=>demora(2000))
        .catch(err => console.log('error-> ' + err));
}
//func1();
//func2(2000);
func3();
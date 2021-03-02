// Ejemplo de promesas con funciones dentro de los ".then()" -que terminan actuando como promesas-
// Es como que: es lo mismo tener una promesa dentro del then() que una funcion que devuelve un valor
//              then() devuelve una promesa nueva diferente a la original

const p1 = new Promise((res, rej) => {
    console.log('Promesa p1');
    res('promesa 1 ok');
});

// Nota1: lo de arriba es equivalente a: const p1= Promise.resolve('promesa 1 ok')
// Nota2: No entiendo bien pero solo con esta definición de la promesa (la de arriba) ya ejecuta a la promesa
//        (cuando ejecuto el programa con "$> node 2-conFuncionesEnElThen" se ejecuta la promesa solamente con la definición de arriba)

const f1 = function () {
    console.log('\t---->funcion f1 declarada afuera<----')
    let j = 5;
    while (j > 1) {
        let i = 1000000000;
        while (i > 1) { i--; }; //demorar 
        j--;
        console.log(i + '->' + j);
    }
}

p1.then(() => console.log('p1.then-->funcion arrow sin parametro (no posee un return, aunque en arrow functions es lo mismo que poner "return")'))
  .then(f1)
  .then(
    () => {
        console.log('p1.then.then.then-->funcion arrow sin parametro (sin return)')
        // Demora para probar que se quede esperando en este .then() y no siga avanzando
        let j = 3;
        while (j > 1) {
            let i = 1000000000;
            while (i > 1) { i--; }; //demorar 
            j--;
            console.log(i + '->' + j);
        }
        // NOTA: ACA NO HAGO UN return Promise.resolve('return de then3') 
        // Supuestamente con Promise.resolve() el proximo then() se llamaría recien cuando se resuelva la promesa           
    })
  .then(
    () => {
        console.log('p1.then.then.then.then-->funcion arrow sin parametro (acá sí hay un return Promise.resolve("return de then")');
        // Demora para probar que se quede esperando en este .then() y no siga avanzando
        let i = 1000000000;
        while (i > 1) { i--; } //demorar la ejecucion de la siguiente instruccion
        return Promise.resolve('return de then');
    })
  .then(
    (res) => {
        console.log('p1.then.then.then.then.then-->funcion arrow con parametro (res)=>{.....etc} res:' + res);
        return 46;
    })
  .then(
    (rta) => console.log('p1.then.then.then.then.then.then respuesta recibida: ' + rta)
    )
  .catch(
    (err) => console.log('p1.catch--> hubo un error: ' + err));

console.log('impresion final: THE END')

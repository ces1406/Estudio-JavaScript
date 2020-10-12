const  {prom1,funprom2,prom3} = require('./5-encadenamiento');
// ¡¡NOTA!!: 
//  HACIENDO--> var {prom1} = require('./5-encadenamiento')
//  lo que pasa es: se ejecuta el programa que hay en 5-encadenamiento.js 

prom1()
    .then(funprom2)
    .then((a)=>prom3(a))                    // mismo resultado que poner: .then(prom3)
    .then(()=>console.log('promesa3.then')) // (*1)
    .catch(err=>console.log('salto el error: '+err));

// Notas: -Se demostró el encadenamiento de las promesas.
//        -Si en (*1) se pone: .then(console.log('promesa3.then')) => se ejecuta independientemente de si se resuelven
//         o rechazan las promesas anteriores (se ve que si no se le pasa a then una funcion => ejecuta lo que tiene
//         adentro sí o sí)
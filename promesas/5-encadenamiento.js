// Encadenamiento de promesas (en los ejemplos anteriores también se ve el encadenamiento de promesas)

// Definicion de las promesas (la segunda en base a una funcion que devuelve una promesa):
const promesa1 = () => {
    return new Promise((res, rej) => {
        const num = Math.floor((Math.random() * 10) + 1);
        console.log('Promesa1 -> se creó num = ' + num)
        if (num > 5) {
            console.log('funcPromesa1 -> numero mayor a 5 => se resuelve la promesa1');
            res(num)
        } else {
            console.log('funcPromesa1 -> numero menor a 5 => se rechaza la promesa1');
            rej(num)
        }
    });
}
function funcPromesa2(num) {
    return new Promise((res, rej) => {
        let num2 = Math.floor((Math.random() * 10) + 1);
        console.log('Promesa2 -> llega el parametro num = ' + num);
        console.log('Promesa2 -> se creó el num2 = ' + num2)
        if (num2 + num > 9) {
            console.log('funcPromesa2 -> numero mayor a 9 => se resuelve la promesa2');
            res(num2 + num);
        } else {
            console.log('funcPromesa2 -> numero menor a 9 => se rechaza la promesa2');
            rej(num2 + num);
        }
    });
}
const funcPromesa3 = (num0) => {
    return new Promise((res, rej) => {
        console.log('Promesa3 -> llega el parametro num0 = ' + num0);
        let num = Math.floor((Math.random() * 100) + 1);
        console.log('Promesa3 -> se creó el num = ' + num)
        if (num > 50) {
            console.log('funcPromesa3 -> numero mayor a 50 => se resuelve la promesa3');
            res(num)
        } else {
            console.log('funcPromesa3 -> numero menor a 50 => se rechaza la promesa3');
            rej(num)
        }
    });
}

// Encadenamiento efectivo de las promesas:
promesa1()
    .then(funcPromesa2) // OJO: no es lo mismo que "funcPromesa2()"---->ahí no respeta la espera de la resolución de la promesa
    .then(funcPromesa3)
    .catch(err=>console.log('salto el error: '+err)); 

    
module.exports = { prom1: promesa1, prom3: funcPromesa3, funprom2: funcPromesa2 }
//module.exports = promesa1
//exports.prom1=promesa1;
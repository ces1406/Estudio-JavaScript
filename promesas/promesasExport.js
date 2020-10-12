const promesa1 = (param) => {
    return new Promise((res, rej) => {
        const num = Math.floor((Math.random() * 10) + 1);
        var tot=0
        console.log('\tPromesa1 -> se recibió: '+param+' y creó: ' + num)
        if (num > 5) {
            console.log('\t\tfuncPromesa1 -> numero aleatorio mayor a 5 => no lo sumo ');
        } else {
            console.log('\t\tfuncPromesa1 -> numero aleatorio menor a 5 => lo sumo');
            tot=num
        }
        tot += param;
        console.log('\t\tfuncPromesa1 ->retorna: '+tot);
        res(tot)
    });
}
function funcPromesa2(num) {
    return new Promise((res, rej) => {
        let num2 = Math.floor((Math.random() * 10) + 1);
        console.log('Promesa2 -> se recibió: '+num+' y se creó: ' + num2)
        if (num2 + num > 9) {
            console.log('funcPromesa2 -> numero mayor a 9 => se resuelve la promesa2');
            res(num2 + num);
        } else {
            console.log('funcPromesa2 -> numero menor a 9 => se rechaza la promesa2');
            rej(num2 + num);
        }
    });
}

module.exports = { prm1: promesa1, prm2: funcPromesa2 }
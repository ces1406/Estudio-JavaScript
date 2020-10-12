// Promesas mediante  ASYNC/AWAIT

function demora1(time) {
    return new Promise((res, rej) => {
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
/*
demora2 = new Promise((res,rej)=>{
    j=0
    while(j<5){
        j++;
        i=100000
        while(i<1){i--;}
        console.log('j->',j)
    }
    console.log('while out')
    res('OK')
})*/
async function func1() {
    console.log('\t-> func1....habrá una demora de 4 segs <-')
    await demora1(4000); // Siempre debe ser "await FuncionQueDevuelveUnaPromesa()" --->y no "await funcionPromesa()" ?
    console.log('1-este mensaje no podria aparecer sino despues de que se ejecute demora(3000)')
    //await demora2;
    console.log('\t-> func1....habrá una demora de 2 segs <-')
    await demora1(2000);
    console.log('2-este mensaje no podria aparecer sino despues de que se ejecute demora2')
}

function func2() {
    console.log('-> func2...llamaremos a func1()');
    func1()
        .then(() => console.log('2-func2() que a su vez llama a func1() en func1.then()'))
        .catch(err => console.log('3-ERRORR: ' + err));
        
    console.log('\n func2 -> mensaje luego de llamar a la funcion func1() (que se ejecuta asincronamente)\n')
}

// Probando async-await y también el orden en que se ejecuten los llamados y mensajes
func1();
//func2();
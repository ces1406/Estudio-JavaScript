// Ejemplo de creación y uso de una promesa, con una funcion que retorna una promesa.

// Nota: abajo la funcion "devuelve" una promesa, no es en sí una promesa.
//       Puede servir para pasar un parametro a la promesa, se le pasa a la funcion y ésta lo pone en la promesa
function demora(time) {
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
func1();
func2(2000);
// Prueba corta de "Iterable":
const iterableA = [1,{name:'juancho',edad:44},2,3,4,5];
const iteradorA = iterableA[Symbol.iterator]();
console.log('iteradorA.next(): ',iteradorA.next())
console.log('iteradorA.next(): ',iteradorA.next())
console.log('iteradorA.next(): ',iteradorA.next())
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------');

// Forma común de hacer un objeto "iterable":
function iterando(vec) {
    var nextId = 0;
    return {
        next: function () {
            if (nextId < vec.length) {
                let valor = vec[nextId];
                let done = false;
                nextId++;
                return { valor, done}
            } else {
                return { done: true }
            }
        }
    }
}
var vector1 = iterando(['uno','dos','tres'])
console.log('vector1.next().valor: '+vector1.next().valor)
console.log('vector1.next().valor: '+vector1.next().valor)
console.log('vector1.next(): ',vector1.next())
console.log('vector1.next(): ',vector1.next())
console.log("\x1b[32m%s\x1b[0m", '-------------------------------------------------');

// Forma estilo ES6 de hacer un objeto "iterable":
// (es como que nos metemos en la definición en sí de un array)
let iterable1 = {
    0:'uno',
    1:'d0s',
    2:'tr3s',
    length:3,
    [Symbol.iterator] (){
        let indice = 0;
        return{
            next:()=>{
                let valor = this [indice];
                let done = indice >= this.length;
                indice++;
                return{valor,done}
            }
        }
    }
}

console.log('iterable1[0]: '+iterable1[0].valor)
console.log('iterable1[1]: '+iterable1[1])
console.log('iterable1[2]: '+iterable1[2])
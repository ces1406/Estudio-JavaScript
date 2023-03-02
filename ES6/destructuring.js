// Destructuring en arrays:
const animales=['pato','ganzo','pollo','mamut'];
var var1 = animales[0];
var var2 = animales[1];
console.log('var1->',var1);
console.log('var2->',var2);
console.log('-------------');
const [var11,var22] = animales;
console.log('var11->',var11);
console.log('var22->',var22);
console.log('-------------');
var [var12,,var13] =animales;
console.log('var12->',var12);
console.log('var13->',var13);
console.log('-------------');
var [var14,...var15] =animales;
console.log('var14->',var14);
console.log('var15->',var15);
console.log('-------------');

// Destructuring en objetos:
const objeto1 ={ a:'casa', b:'departamento', c:'choza' };
const {a} = objeto1
console.log('a->',a)
console.log('-------------')
const {a:prop1,b:prop2} = objeto1
console.log('prop1->',prop1)
console.log('prop2->',prop2)
console.log('-------------')

// Funcion sin parametro por defecto:
function adornar1(param){
    console.log('hola---->'+param+'<----')
}
adornar1('luli')
adornar1()
console.log('-------------')

// Funcion con parametro por defecto:
function adornar2 (param = 'vacio') {
    console.log('hola2->'+param+'<-')
}
adornar2('luli')
adornar2()
console.log('-------------')
const vec1 = [1,2,3,4,5];
const vec2 = [6,7,8,9]
const vec3 = [1,3,7,8]

let vec4 =[...vec1,...vec2];
console.log('vec4: '+JSON.stringify(vec4));

let vec5 = [...vec1,...vec3];
console.log('vec5: '+JSON.stringify(vec5));

// Ver la diferencia: [vec1] con [...vec1] :
let vec6 =[vec1,1];
console.log('vec6: ',vec6)

const vecObj1 = [{id:1,name:'juan'},{id:2,name:'jose'},{id:3,name:'javier'},{id:4,name:'jairo'}]
const vecObj2 = [{id:1,name:'jeremias'},{id:2,name:'jose'},{id:4,name:'jorge'}]
console.log('vecObj1: '+JSON.stringify(vecObj1))

const vecFin = [...vecObj1,{id:2,name:'jose'}]//...vecObj2]
console.log('vecFin: '+JSON.stringify(vecFin))
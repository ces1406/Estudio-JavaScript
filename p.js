function p(input) {
    var op=input.split(";")
    var rta;
    if(op[0]==='S'){
        rta=[];
        var pal='';
        Array.from(op[2]).forEach((e,i) => {
            if(i+1==op[2].length){
                pal += e;
                rta.push(pal)
            }
            if(e===e.toUpperCase() && i!==0 && e!=='(' && e!==')'){
                rta.push(pal);
                pal=e.toLowerCase();
            }else{
                pal += e;
            }
        });
        if(op[1]==='M'){rta[rta.length-1]=rta[rta.length-1].substring(0,rta[rta.length-1].length-2)}
    }else{
        rta='';
        let r = op[2].split(' ');
        r.forEach((e,i)=>{
            e = e.toUpperCase().substring(0,1)+e.substring(1,e.length);
            rta += e;
        })
        if(op[1]!=='C')rta = rta.substring(0,1).toLowerCase()+rta.substring(1,rta.length);
        if(op[1]==='M')rta+='()';
    }
    return rta;
} 
console.log(p('C;M;coffee machine'));
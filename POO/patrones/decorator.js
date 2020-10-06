class Bebida {
    constructor(descrip,cost){
        this.descripcion = descrip;
        this.costo = cost;
    }
    getCosto = function (){return this.costo}
    getDescripcion = function(){return this.descripcion}
}

class Espresso extends Bebida {
    constructor(){
        //this.costo2 = 1.03;
        //this.descripcion2 = 'Cafe espresso en taza chica';
        super('Cafe espresso en taza chica',1.05)
    }    
}

class Condimentador extends Bebida {
    constructor(descrip,cost){
        super(descrip,cost)
        this.tipo = 'Condimento de Bebidas'
    }
    getTipo(){return this.tipo}
}

class Chocolate extends Condimentador {
    constructor(unaBebida){
        super(unaBebida.getDescripcion() + " con chocolate amargo", unaBebida.getCosto() + 0.21);
        this.bebida = unaBebida;        
    }
}

class Leche extends Condimentador {
    constructor(unaBebida){
        super(unaBebida.getDescripcion() + " con leche", unaBebida.getCosto() + 0.16);
        this.bebida = unaBebida;
    }
}


var bebida1 = new Espresso();
console.log('Bebida: '+bebida1.getDescripcion()+' Precio:'+bebida1.getCosto())
bebida1 = new Leche(bebida1)
console.log('Tipo: '+bebida1.getTipo())
console.log('Bebida: '+bebida1.getDescripcion()+' Precio:'+bebida1.getCosto())
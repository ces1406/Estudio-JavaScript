// Singleton con funcion constructora:
// Nadie fuera de Singleton hace el new(), solo Singleton hace new() de sí mismo y se lo auto-asigna a "._instance"
// Los objetos exteriores para referenciar a Singleton lo hacen mediante "Singleton._instance"
var Singleton = (function () {
    function Singleton() {
        this.atributoSingleton = null;
        if (Singleton._instance) { return Singleton._instance; }//<--- return en la funcion constructora ??
        Singleton._instance = this; // <---------clave!!
    }
    Singleton.prototype.getAtributo = function () {
        return this.atributoSingleton;
    }
    Singleton.prototype.setAtributo = function (atrib) {
        this.atributoSingleton = atrib
    }
    // Retorna "Singleton._instance" (y si no existe la crea con "new Singleton()" )
    Singleton.getInstancia = function () {
        if (!Singleton._instance) { Singleton._instance = new Singleton() } //<------El único lugar donde aparece new()
        return Singleton._instance
    }
    Singleton._instance = null;
    return Singleton;
})();

var single1 = Singleton.getInstancia()
console.log('single1: ', single1)
single1.setAtributo('cocorito coso')
console.log('single1.getAtributo(): ' + single1.getAtributo())
console.log('single1.atributoSingleton: ' + single1.atributoSingleton)
var single2 = Singleton.getInstancia()
console.log('single2.getAtributo(): ' + single2.getAtributo())

// Singleton con class: 
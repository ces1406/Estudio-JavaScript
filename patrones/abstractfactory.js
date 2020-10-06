/*
Este patron crea kits de objetos sin saber su tipo concreto. Declara una interface para crear cada una  de
las clases relacionadas de la familia
Nota: 

Ejemplo: Hay un Reino y diferentes Casas. Las reglas de las casas cambian con cierta frecuencia. Cada casa
        gobernara el reino de forma diferente. La Regla del Reino es demasiado grande para un solo indivi-
        duo, entonces el Rey delega desiciones en sus segundos(hand of the king), el Rey es tambien aseso-
        rado por un consejo que consiste en algunos señores y damas mas sabios.
        Entonces hay 3 tipos de Reglas (RulingFamily):
        -King
        -HandOfTheKing
        -KingsCouncil
        El tema es que los miembros de la RulingFamily pueden cambiar frecuentemente, acoplandose a una fa-
        milia concreta haciendo frágil a la aplicación
 */

// El Rey:
var ReyJuan = (function () {
        function Rey() { }
        Rey.prototype.decidir = function () {
                console.log("El Rey decide blablabla")
        }
        Rey.prototype.matrimonio = function () {
                //...
        }
        return Rey;
})();
// La mano derecha del rey:
var LordTomas = (function () {
        function Lord() { }
        Lord.prototype.decidir = function () {console.log("La mano derecha del Rey decide blablabla") }
        return Lord
})()
// La factory concreta:
var ReglasReinoFactory = (function () {
        function Factory() { }
        Factory.prototype.getRey = function () {
                return new ReyJuan();
        }
        Factory.prototype.getManoDerechaDelRey = function () {
                return new LordTomas();
        };
        return Factory;
})();

// La clase cliente que requiere el uso de familia de reglas
var Corte = (function () {
        function Corte(abstractFactory) {
                this.abstractFactory = abstractFactory;
                this.LIMITE_DE_SERVERIDAD_DE_QUEJA = 10;
        }
        Corte.prototype.quejaPresentada = function (queja) {
                if (queja.severidad < this.LIMITE_DE_SEVERIDAD_DE_QUEJA) {
                        this.abstractFactory.getManoDerechaDelRey().decidir();
                } else
                        this.abstractFactory.getRey().decidir();
        };
        return Corte;
})();


// Implementacion final de todo:
var corte1 = new Corte(new ReglasReinoFactory())
corte1.quejaPresentada({severidad:8})
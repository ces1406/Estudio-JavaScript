// Prueba de uso de promesas sin "new Promise()" -- o sea: que una funcion común tenga un .then()
// ( visto este ejemplo en algunos libros )
//  NO FUNCIONA !! tira error en el  ".then(funct..." 

var usuario = {
    perfil: null,
    setPerfil: function () {
        this.perfil = { nombre: 'putin puton', apellido: 'reuputin' };
        return this.perfil
    }
};

var navbar = {
    show: function (user) {
        // USA UN THEN SIN QUE setPerfil() SEA UNA PROMESA => da ERROR
        user.setPerfil().then(function () {
            console.log('*** Navbar ***');
            console.log('Name: ' + perfi.nombre);
        });
    }
};

navbar.show(usuario);
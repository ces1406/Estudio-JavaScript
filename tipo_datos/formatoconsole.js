console.log("PRUEBAS DE FORMATEO DE TEXTO (no andan muy bien en chrome-console)")

var objeto = { prop1: 'texto', num: 44 }
console.log("Decimal: %d (en palabras/string: %s y el objeto: %o", 1.12, 'uno punto doce)', objeto)

console.log('-->\\x1b : no sé que hace, [36m es el estilo a aplicar(en este caso color cian)')// "\x1b[36m%s\x1b[0m",
console.log('-->\\x1b[0m : resetea el estilo aplicado antes')

console.log("\x1b[31m%s", 'ROJO', '\x1b[0m'); // que es exactamente igual a-> console.log("\x1b[31m%s\x1b[0m", 'ROJO')
console.log("\x1b[31m\x1b[1m%s\x1b[0m", "ROJO BOLD");
console.log("\x1b[31m\x1b[2m%s\x1b[0m", "ROJO FINITO", '\x1b[0m');
console.log("\x1b[31m\x1b[4m%s", "ROJO SUBRAYADO", '\x1b[0m');
console.log("\x1b[31m\x1b[5m%s", "ROJO PARPADEANTE", '\x1b[0m');
console.log("\x1b[41m%s\x1b[0m", 'FONDO ROJO ')
console.log("\x1b[91m%s\x1b[0m", 'ROJO LUMINOSO')
console.log("\x1b[97m%s", 'BLANCO', '\x1b[0m');
console.log("\x1b[36m%s", 'CIAN', '\x1b[0m')
console.log("\x1b[32m%s\x1b[0m", 'VERDE')
console.log("\x1b[34m%s\x1b[0m", 'AZUL')
console.log("\x1b[35m%s\x1b[0m", 'MAGENTA')
console.log("\x1b[95m%s\x1b[0m", 'MAGENTA LUMINOSO')
console.log("\x1b[33m%s", 'AMARILLO', '\x1b[0m');
console.log("\x1b[93m%s\x1b[0m", 'AMARILLO LUMINOSO')
console.log("\x1b[90m%s\x1b[0m", 'GRIS')
console.log("\x1b[37m%s\x1b[0m", 'GRIS LUMINOSO')
console.log("\x1b[38;5;82m%s\x1b[0m", 'COLOR->NOTACION 38;5;numDeColor(de 0 a 256)')
console.log("\x1b[38;5;208m%s\x1b[0m", 'COLOR->NOTACION 38;5;208')
console.log("\x1b[38;5;228m%s\x1b[0m", 'COLOR->NOTACION 38;5;228')
console.log("\x1b[34m%s\x1b[0m", 'AZUL')
console.log("\x1b[94m%s\x1b[0m", 'AZUL LUMINOSO')
console.log("ESTE ES \x1b[94m%s\x1b[0m TEXTO AGREGADO ", 'AZUL LUMINOSO')
console.log("ESTE ES \x1b[94m%s\x1b[0m TEXTO AGREGADO ", 'AZUL LUMINOSO')
console.log("ESTE ES \x1b[94m%s\x1b TEXTO AGREGADO ", 'AZUL LUMINOSO')
console.log("ESTE ES \x1b[94m%s TEXTO AGREGADO ", 'AZUL LUMINOSO')

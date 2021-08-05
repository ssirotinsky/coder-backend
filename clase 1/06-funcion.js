// Función Tradicional 
function total(precio, cantidad) {
    console.log('El total es: ', precio * cantidad);
}

total(10, 20);
total(5, 1000);

//Función anónima
// lista = [1, 2, 3]
// listax2 = lista.map(function(e) {
//     return e * 2
// })
// console.log(listax2);

// lista = [1, 2, 3]
// const multiplica = function(e) {
//     return e * 2;
// }
// listax2 = lista.map(multiplica)
// console.log(listax2);

//Función IIFE (se ejecutan ni bien se definen)
// (function() {
//     console.log('hola');
// })();

// (function(a, b) {
//     console.log(a + b);
// })(1, 2);
// Sin Parámetros:
// function noFlecha() {
//     console.log('NO Flecha!')
//     return 'Vuelvo de NO flecha';
// }

// let siFlecha = () => {
//     console.log('Si Flecha!');
//     return 'Vuelvo de SI flecha'
// }

// console.log(noFlecha());
// console.log(siFlecha())


// Con Parámetros:
// function noFlecha(a, b) {
//     console.log('NO Flecha!', a, b)
//     return 'Vuelvo de NO flecha';
// }

// let siFlecha = (a, b) => {
//     console.log('Si Flecha!', a, b);
//     return 'Vuelvo de SI flecha'
// }

// console.log(noFlecha(1, 2));
// console.log(siFlecha(1, 2));



// Si sólo ejecuta un return:
// function noFlecha(a, b) {
//     return 'Vuelvo de NO flecha ' + a + b;
// }

// let siFlecha = (a, b) => 'Vuelvo de SI flecha ' + a + b;

// console.log(noFlecha(1, 2));
// console.log(siFlecha(1, 2));

//Ejemplo práctico:
// lista = [1, 2, 3, 4, 5, 6]
// console.log(lista.filter(e => e > 2));

//Uso de this:
// function Probando() {
//     this.prueba = 50;
//     setTimeout(function() {
//             console.log(this);
//         })
//         setTimeout(() => console.log(this), 1000);
// }
// prueba = 10;
// var prueba = new Probando();
const numeros = [1, 2, 3, 4, 5];
const cuadrado = (e) => [e, e ** 2];

console.log(numeros.map(cuadrado));
console.log(numeros.flatMap(cuadrado)); //sólo existe de orden 1
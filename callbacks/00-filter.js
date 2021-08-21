const misNumeros = [0,1,2,3,4,5,6,7,8,9,10];
const misNumerosPares = misNumeros.filter(e=>e%2==0);
// const misNumerosParesMenoresA5 = misNumerosPares.filter(e=>e<5);
const misNumerosParesMenoresA5 = misNumeros.filter(e=>e%2==0).filter(e=>e<5);
 console.log(misNumerosParesMenoresA5);

// const filtrar = (miArray, miFuncion) => {
//     let result = [];
//     for (let elemento in miArray) {
//         if (miFuncion(elemento)) {
//             result.push(elemento);
//         }
//     }
//     return result;
// }

// const esPar = (e) => e%2==0; 

// console.log(filtrar(misNumeros, esPar));
let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 }, 
    { id: 2, nombre: 'Calculadora', precio: 234.56 }, 
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 }, 
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 }, 
    { id: 5, nombre: 'Reloj', precio: 1167.89 }, 
    { id: 6, nombre: 'Agenda', precio: 8.90 } 
];

let nombres = productos.map(e=>e.nombre).join(',');
let suma = productos.reduce((acu,act)=>acu + act.precio,0).toFixed(2);
let promedio = (productos.reduce((acu,act)=>acu + act.precio,0) / productos.length).toFixed(2);
let minimo = productos.find(e=>e.precio == Math.min(...productos.map(e=>e.precio)));
let maximo = productos.find(e=>e.precio == Math.max(...productos.map(e=>e.precio)));

let miObjeto = { nombres, suma, promedio, minimo, maximo };
console.log(miObjeto);
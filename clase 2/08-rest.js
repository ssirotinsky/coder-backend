//Destructuración de objetos:
let cliente = {
    nombres: 'Ariel Arnaldo',
    apellido: 'Ortega',
    edad: 47,
    goles: 140
};
// let { nombres, edad, goles, noexiste } = cliente;
// console.log(nombres, edad, goles, noexiste);
//nombres = cliente.nombres
//edad = cliente.edad
//goles = cliente.goles

// Propiedades rest:
// let { apellido, ...info } = cliente;
// console.log( info);

//Propiedades spread:
let nuevoCliente = {
    ...cliente,
    club: 'River Plate',
    esIdolo: true
};
console.log(nuevoCliente);
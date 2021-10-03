const {options} = require('./options/mariaDB');
const knex = require('knex')(options);

const cars = [
    {name: 'Audi', price: 12000},
    {name: 'Ford', price: 3000},
    {name: 'Fiat', price: 2000},
    {name: 'Renault', price: 4500},
    {name: 'Peugeot', price: 4500}
];

knex('cars').insert(cars)
.then (()=>{
    console.log('Filas insertadas!');
    knex.destroy();
})
.catch(e=>{
    console.log('Error en Insert:', e);
    knex.destroy();
})

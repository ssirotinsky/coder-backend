const {options} = require('./options/mariaDB');
const knex = require('knex')(options);

knex.from('cars').where('price', '=', 4500).update({price: 4700})
.then(() => {
    console.log('Filas actualizadas!')
    knex.destroy();
})
.catch(e=>{
    console.log('Error en Update:', e);
    knex.destroy();
});


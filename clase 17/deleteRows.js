const {options} = require('./options/mariaDB');
const knex = require('knex')(options);

knex.from('cars').where('price', '>', 4500).del()
.then(() => {
    console.log('Filas borradas!');
    knex.destroy();
})
.catch(e=>{
    console.log('Error en Delete:', e);
    knex.destroy();
});


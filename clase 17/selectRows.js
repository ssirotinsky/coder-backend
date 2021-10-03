const {options} = require('./options/mariaDB');
const knex = require('knex')(options);

knex.from('cars').select('*')
.then(autos => {
    for (auto of autos) {
        console.log(`${auto['id']}. Marca: ${auto['name']} - Precio $${auto['price']}`);
    }
    knex.destroy();
})
.catch(e=>{
    console.log('Error en Select:', e);
    knex.destroy();
});


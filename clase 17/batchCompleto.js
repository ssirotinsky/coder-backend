const {options} = require('./options/mariaDB');
const knex = require('knex')(options);

const cars = [
    {name: 'Audi', price: 12000},
    {name: 'Ford', price: 3000},
    {name: 'Fiat', price: 2000},
    {name: 'Renault', price: 4500},
    {name: 'Peugeot', price: 4500}
];

(async ()=>{
    try {
        
        console.log('Borrando autos...');
        await knex.from('cars').del();
        
        console.log('Inserando autos...');
        await knex('cars').insert(cars);
        
        console.log('Listando todos los autos...');
        let autos = await knex.from('cars').select('*')
        for (auto of autos) {
            console.log(`${auto['id']}. Marca: ${auto['name']} - Precio $${auto['price']}`);
        }

        console.log('Listando todos los autos con precio > 4000...');
        autos = await knex.from('cars').select('*').where('price', '>', 4000)
        for (auto of autos) {
            console.log(`${auto['id']}. Marca: ${auto['name']} - Precio $${auto['price']}`);
        }

        console.log('Actualizando autos con precio = 4500...');
        await knex.from('cars').where('price', '=', 4500).update({price: 4700});

        console.log('Borrando autos con precio > 10000...');
        await knex.from('cars').where('price', '>', 10000).del();

        console.log('Listando todos los autos ordenados por precio descendente...');
        autos = await knex.from('cars').select('*').orderBy('price', 'desc');
        for (auto of autos) {
            console.log(`${auto['id']}. Marca: ${auto['name']} - Precio $${auto['price']}`);
        }

    }
    catch (e) { 
        console.log('Error en proceso:', e);
    }
    finally {
        console.log('Proceso finalizado!');
        knex.destroy();
    }
})();
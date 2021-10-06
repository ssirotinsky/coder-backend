const {options} = require('./options/SQLite3');
const knex = require('knex')(options);

const articulosA = [
    {nombre: 'Celular', codigo: 'CELU', precio: 12499.99, stock: 5000},
    {nombre: 'Televisión', codigo: 'TV', precio: 27999.99, stock: 300},
    {nombre: 'Notebook', codigo: 'NOTE', precio: 48200.12, stock: 1500},
    {nombre: 'Tablet', codigo: 'TAB', precio: 3000.00, stock: 200},
    {nombre: 'Mouse', codigo: 'RATON', precio: 1009.50, stock: 13200}
];


(async ()=>{
    try {
        await knex.schema.dropTableIfExists('articulos');
        console.log('Tabla borrada...');

        await knex.schema.createTable('articulos', table => {
                table.increments('id'),
                table.string('nombre'),
                table.string('codigo'),
                table.float('precio'),
                table.integer('stock')
            });
        console.log('Tabla de articulos creada...');

        await knex('articulos').insert(articulosA);
        console.log('Articulos insertados...');

        let articulos = await knex.from('articulos').select('*');
        console.log('Listando articulos...');
        for (let articulo of articulos) {
            console.log(`${articulo['id']}. ${articulo['codigo']} - ${articulo['nombre']}. Precio: $${articulo['precio']} - Stock: ${articulo['stock']}`);
        }

        await knex.from('articulos').where('id', '=', 3).del();
        console.log('Articulo borrado...');

        await knex.from('articulos').where('id', '=', 2).update({stock: 0});
        console.log('Articulo actualizado...');

        articulos = await knex.from('articulos').select('*');
        console.log('Listando articulos finales...');
        for (let articulo of articulos) {
            console.log(`${articulo['id']}. ${articulo['codigo']} - ${articulo['nombre']}. Precio: $${articulo['precio']} - Stock: ${articulo['stock']}`);
        }
        knex.destroy();
    }

    catch(e) {
        console.log('Error en proceso:', e);
        knex.destroy();
    }
})();


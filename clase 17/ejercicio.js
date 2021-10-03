const {options} = require('./options/mariaDB');
const knex = require('knex')(options);

const articulos = [
    {nombre: 'Celular', codigo: 'CELU', precio: 12499.99, stock: 5000},
    {nombre: 'Televisión', codigo: 'TV', precio: 27999.99, stock: 300},
    {nombre: 'Notebook', codigo: 'NOTE', precio: 48200.12, stock: 1500},
    {nombre: 'Tablet', codigo: 'TAB', precio: 3000.00, stock: 200},
    {nombre: 'Mouse', codigo: 'RATON', precio: 1009.50, stock: 13200}
];


knex.schema.dropTableIfExists('articulos')
.then(()=>console.log('Tabla borrada...'))
.catch(e=>{
    console.log('Error en drop:', e);
    knex.destroy();
    process.exit(500);
});

knex.schema.createTable('articulos', table => {
    table.increments('id'),
    table.string('nombre'),
    table.string('codigo'),
    table.float('precio'),
    table.integer('stock')
})
.then(()=>{
    console.log('Tabla de articulos creada...');
    return knex('articulos').insert(articulos);
})
.then(()=>{
    console.log('Articulos insertados...');
    return knex.from('articulos').select('*');
})
.then((articulos)=>{
    console.log('Listando articulos...');
    for (let articulo of articulos) {
        console.log(`${articulo['id']}. ${articulo['codigo']} - ${articulo['nombre']}. Precio: $${articulo['precio']} - Stock: ${articulo['stock']}`);
    }
    return knex.from('articulos').where('id', '=', 3).del();
})
.then(()=>{
    console.log('Articulo borrado...');
    return knex.from('articulos').where('id', '=', 2).update({stock: 0});
})
.then(()=>{
    console.log('Articulo actualizado...');
    knex.destroy();
})
.catch(e=>{
    console.log('Error en proceso:', e);
    knex.destroy();
});


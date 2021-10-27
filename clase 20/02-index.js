let mongoose = require('mongoose');
let {Estudiante} = require('./models/estudiantes');

CRUD();

function CRUD(){
    const URI = 'mongodb://localhost:27017/colegio';
    mongoose.connect(URI, 
        { 
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 1000
        })
    .then(()=>console.log('Conectado a la base de datos...'))
    .then(()=>Estudiante.find({}).sort({'nombre': 1}))
    .then(estudiantes=>{
        console.log('Lista de estudiantes ordenada por nombre:');
        console.log(estudiantes);
    })
    .then(()=>Estudiante.find({}).sort({'edad': 1}).limit(1))
    .then(estudiante=>{
        console.log('Estudiante más joven:');
        console.log(estudiante);
    })
    .then(()=>Estudiante.find({curso: '2A'}))
    .then(estudiantes=>{
        console.log('Lista de estudiantes del curso 2A:');
        console.log(estudiantes);
    })
    .then(()=>Estudiante.find({}).sort({'edad': 1}).skip(1).limit(1))
    .then(estudiante=>{
        console.log('Segundo estudiante más joven:');
        console.log(estudiante);
    })
    .then(()=>Estudiante.find({},{nombre:1, apellido:1, curso:1, _id:0}).sort({apellido:-1}))
    .then(estudiantes=>{
        console.log('Nombre, apellido y curso ordenados por apellido descendente:');
        console.log(estudiantes);
    })
    .then(()=>Estudiante.find({nota: 10}))
    .then(estudiantes=>{
        console.log('Estudiantes que sacaron 10:');
        console.log(estudiantes);
    })
    // .then(()=>Estudiante.aggregate([ { $match: {nota: {$exists: 1}}} , { $group: { _id: null, promedio: { $avg: '$nota' }}} ]))
    // // .then(()=>Estudiante.aggregate([ { $match: {nota: {$exists: 1}}} ]))
    // .then(notas=>{
    //     console.log('Promedio de notas del total:');
    //     console.log(notas[0]);
    // })
    // .then(()=>Estudiante.aggregate([ { $match: {curso: '1A'}} , { $group: { _id: null, promedio: { $avg: '$nota' }}} ]))
    // // .then(()=>Estudiante.aggregate([  { $match: {curso: '1A'}}]))
    // .then(notas=>{
    //     console.log('Promedio de notas del curso 1A:');
    //     console.log(notas[0].promedio);
    // })
    .then(()=>mongoose.connection.close())
    .catch(error=>console.log('Error al conectarse a la base de datos', error));       
}
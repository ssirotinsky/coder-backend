let mongoose = require('mongoose');
let {Estudiante} = require('./models/estudiantes');

CRUD();

function CRUD(){
    const URI = 'mongodb+srv://sergiosiro:ko7YMDi8zZ2PfNrL@cluster0.8vpxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    mongoose.connect(URI, 
        { 
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000
        }, 
        (error) => {
            if (error) {
                throw  'Error al conectarse a la base de datos';
            } else {
                console.log('Conectado a la base de datos...');
                console.log('Creando estudiantes...');
                let estudiantesArray = 
                [
                    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '313222398', curso: '1A', nota: 7 },
                    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27222878', curso: '1A', nota: 8 },
                ];

                // for (estu of estudiantesArray) {
                //     const estudianteSaveModel = new Estudiante(estu);
                //     estudianteSaveModel.save((error)=>{
                //         if (error) {
                //             throw "Error al grabar estudiante " + estu.nombre;
                //         } else {
                //             console.log(`Estudiante grabado...`);
                //         }
                //     }); 
                // }
                Estudiante.insertMany(estudiantesArray,(error)=>{
                    if (error) {
                        throw "Error al grabar estudiantes " + error;
                    } else {
                        console.log(`Estudiantes grabados...`);
                    }
                });


            }
      });
      
}
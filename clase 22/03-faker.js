const faker = require('faker');
const fs = require('fs');

let str = "NOMBRE,APELLIDO,EMAIL,TRABAJO,LUGAR\n";

for (let i=0;i<100;i++){
    str += faker.name.firstName() + ',' +
           faker.name.lastName() + ',' +
           faker.internet.email() + ',' +
           faker.name.jobTitle() + ',' +
           faker.random.locale() + '\n' 
}

fs.writeFile('./datosFake.csv', str, (err)=>{
    if (err) {
        console.log('Error en la grabación');
    } else {
        console.log('Archivo fake generado');
    }
});
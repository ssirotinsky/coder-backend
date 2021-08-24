import fs from 'fs';

console.log('inicio del programa');

fs.promises.readFile('./info.txt', 'utf-8')
.then(contenido=>{
    let info = JSON.parse(contenido);
    info.contenidoObj.author = 'Coderhouse';
    let grabar = JSON.stringify(info.contenidoObj, null, '\t');
    fs.promises.writeFile('./package.json.coder', grabar);
})
.then(()=>console.log('Archivo guardado!'))
.catch(error=>{
    console.log('Error!', error);
});

console.log('final del programa');

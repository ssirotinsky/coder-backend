process.on('beforeExit', (code)=>{
    console.log('Antes de salir del proceso con código:', code);
    const fs = require('fs')
    fs.readFile('./nada.txt', 'utf8' , (err, data) => {
        if (err) {
         console.error('Error!', err);
        } else {
            console.log('Data', data);
            process.exit(0);
        }
    });

});

process.on('exit', (code)=>{
    console.log('Valor de i:', i);
    console.log('Saliendo del proceso con código:', code);
});


let i;
for (i=0; i<1000; i++){
    // if (i==500) {
    //     console.log('saliendo...');
    //     // process.exit(3);
    // }
}
console.log('Llegué al final...');




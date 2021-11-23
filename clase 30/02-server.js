const express = require('express');
const moment = require('moment');
const cluster = require('cluster');

let error;

process.on('exit', (code)=>{
    console.log(`Saliendo con código ${code}`);
    if (code != 0){
        console.log('error:', error);
    }
});

if (process.argv[2]==undefined){
    error = {descripcion: 'Falta puerto de escucha'}
    process.exit(-5);
}
if (process.argv[3]!="FORK" && process.argv[3]!="CLUSTER"){
    error = {descripcion: 'Falta modo. Debe ser FORK o CLUSTER'}
    process.exit(-5);
}
const PORT = parseInt(process.argv[2]);
const MODO = process.argv[3];

const app = express();

if (MODO == "FORK") {
    levantarServer();
} else if (MODO == "CLUSTER") {
    if (cluster.isMaster){
        console.log(`Master PID ${process.pid} is running`);
        for (let i=0; i<2; i++){
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => console.log(`Worker ${worker.process.pid} died`));
    } else {
        levantarServer();
    }    
}

function levantarServer(){
    const server = app.listen(PORT, ()=>{
        console.log('Servidor HTTP escuchando en el port', server.address().port, '. Process ID: ', process.pid);
    });
    server.on('error', error=>console.log('Error en servidor', error));
    
    app.get('/datos', (req,res)=>{
        console.log(`Port: ${PORT} -> Fyh: ${moment().format('DD/MM/YYYY HH:mm')}`);
        res.send(`Servidor express <span style="color: blueviolet;">(Nginx)</span> en ${PORT} - PID ${process.pid} - ${moment().format('DD/MM/YYYY HH:mm')}`);
    });
}


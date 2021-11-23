const express = require('express');
const cluster = require('cluster');
const moment = require('moment');
const numCPUs = require('os').cpus().length;

const app = express();


if (cluster.isMaster){
    console.log(`Cantidad de CPUs: ${numCPUs}`);
    console.log(`Master PID ${process.pid} is running`);
    for (let i=0; i<numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => { 
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork();
    });
} else {
    const PORT = process.argv[2] || 8080;
    const server = app.listen(PORT, ()=>{
        console.log('Servidor worker HTTP escuchando en el puerto', server.address().port, '. Process ID: ', process.pid);
    });
    server.on('error', error=>console.log('Error en servidor', error));
    app.get('/', (req,res)=>{
        res.send(`Servidor express en ${PORT} - PID ${process.pid} - ${moment().format('DD/MM/YYYY HH:mm')}`);
    });
} 

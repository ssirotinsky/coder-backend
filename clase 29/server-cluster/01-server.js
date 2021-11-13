const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster){
    console.log(`Cantidad de CPUs: ${numCPUs}`);
    console.log(`Master PID ${process.pid} is running`);
    for (let i=0; i<numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => console.log(`Worker ${worker.process.pid} died`));
} else {
    const PORT = 8080;
    http.createServer((req, res)=>{
        res.writeHead(200);
        res.end('Finalizando...\n');
    }).listen(PORT);
    console.log(`Worker ${process.pid} started`);
}

//en windows, para ver lista de procesos node corriendo: 
//tasklist /FI "IMAGENAME eq node*"

//en windows, para matar un proceso:
//taskkill /PID #pid /F 

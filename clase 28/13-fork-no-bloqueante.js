const http = require('http');
const {fork} = require('child_process');

let visitas = 0;

const server = http.createServer();
server.on('request', (req, res)=>{
    let {url} = req;
    if (url == '/calcular'){
        const computo = fork('./computo.js');
        computo.send('start');
        computo.on('message', sum=>res.end(`La suma es ${sum}`));
        console.log('Es no bloqueante!');
    } else if (url == '/') {
        res.end(`Ok  ${++visitas}`);
    } else {
        res.end('Ruta no valida');
    }
});

const PORT = 8080;
server.listen(PORT, err=>{
    if (err){
        throw new Error('Error en servidor' + err);
    }
    console.log('Servidor http escuchando en puerto', PORT);
});
const http = require('http');
const {fork} = require('child_process');

const sumar = () => {
    let suma = 0;
    for (let i=0; i<5e9; i++){
        suma+=i;
    }
    return suma;
}

let visitas = 0;

const server = http.createServer();
server.on('request', (req, res)=>{
    let {url} = req;
    if (url == '/calculo-bloq'){
        const sum = sumar();
        res.end(`La suma es ${sum}`);
    } else if (url == '/calculo-nobloq'){
        const computo = fork('./computo.js');
        computo.send('start');
        computo.on('message', sum=>res.end(`La suma es ${sum}`));
    } else if (url == '/') {
        res.end(`Contador de visitas: ${++visitas}`);
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
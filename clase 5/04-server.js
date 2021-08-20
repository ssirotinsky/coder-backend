var http = require('http');

var server = http.createServer(function (peticion, respuesta) {
    respuesta.end("Hola como estas");
});

server.listen(8000, function() {
    console.log('Tu servidor está listo en', this.address().port);
});
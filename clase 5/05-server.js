var http = require('http');

var server = http.createServer(function (peticion, respuesta) {
    var hora = new Date().getHours();
    if (hora >= 6 && hora <= 12) {
        respuesta.end("Buenos dias!");
    } else if (hora >= 13 && hora <= 19) {
        respuesta.end("Buenas tardes!");
    } else {
        respuesta.end("Buenas noches!");
    }
});

server.listen(8080, function() {
    console.log('Tu servidor está listo en', this.address().port);
});
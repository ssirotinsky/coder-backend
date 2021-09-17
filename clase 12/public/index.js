const socket = io();

socket.on('atodos', (data) => {
    let ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML = '';
    for (mensaje of data) {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `SocketId: ${mensaje.socketId} - Mensaje: ${mensaje.mensaje}`;
    }
})

socket.on('devuelvo', (data) => {
    let p = document.getElementsByTagName('p')[0];
    p.innerHTML = data;
})

function enviar() {
    socket.emit('notificacion', document.getElementsByTagName('input')[0].value);
};

function cambio(valor) {
    socket.emit('mitexto', valor);
}
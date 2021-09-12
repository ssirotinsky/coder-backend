const socket = io();

function enviarMensaje() {
    let data = document.getElementsByTagName('input')[0].value;
    socket.emit('mensaje', data);
    document.getElementsByTagName('input')[0].value = '';
}

socket.on('lista', (data) => {
    for (mensaje of data) {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `SocketId: ${mensaje.socketid} - Mensaje: ${mensaje.mensaje}`;
    }
});

socket.on('nuevo', (data) => {
    console.log(data);
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `SocketId: ${data.socketid} - Mensaje: ${data.mensaje}`;
});
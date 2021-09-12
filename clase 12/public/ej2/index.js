const socket = io();

function ingresoTexto(texto) {
    socket.emit('texto', texto);
}

socket.on('broadcast', (data) => {
    document.getElementsByTagName('p')[0].innerHTML = data;
});
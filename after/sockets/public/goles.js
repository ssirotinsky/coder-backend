let socket = io();

socket.on('partidos', (data)=>{
    render(data);
});

let render = (data) => {
    let html = data.map((e,i)=>`
        <div class="fila">
            <div class="mas" onclick="sumaGolLocal(this)" id="${i}">+</div>
            <div class="menos" onclick="restaGolLocal(this)" id="${i}">-</div>
            <strong class="goles">${e.local.goles}</strong>
            <em class="equipo">${e.local.equipo}</em>
            <span class="vs">vs.</span>
            <em class="equipo">${e.visitante.equipo}</em>
            <strong class="goles">${e.visitante.goles}</strong>
            <div class="mas" onclick="sumaGolVisitante(this)" id="${i}">+</div>
            <div class="menos" onclick="restaGolVisitante(this)" id="${i}">-</div>
        </div>
    `).join(' ');
    document.getElementById("partidos").innerHTML = html;
}

let sumaGolLocal = (n) => {
    socket.emit('suma-gol', {tipo: 'local', id: n.id})
}

let restaGolLocal = (n) => {
    socket.emit('resta-gol', {tipo: 'local', id: n.id})
}

let sumaGolVisitante = (n) => {
    socket.emit('suma-gol', {tipo: 'visitante', id: n.id})
}

let restaGolVisitante = (n) => {
    socket.emit('resta-gol', {tipo: 'visitante', id: n.id})
}

let socket = io();

socket.on('partidos', (data)=>{
    render(data);
});

let render = (data) => {
    let html = data.map((e,i)=>`
        <div class="fila">
            <strong class="goles">${e.local.goles}</strong>
            <em class="equipo">${e.local.equipo}</em>
            <span class="vs">vs.</span>
            <em class="equipo">${e.visitante.equipo}</em>
            <strong class="goles">${e.visitante.goles}</strong>
        </div>
    `).join(' ');
    document.getElementById("partidos").innerHTML = html;
}

socket.on('gol', (data) => {
    let noticia = document.getElementById('noticia'); 
    noticia.style.display = 'block';
    noticia.innerHTML = `Gol de ${data.equipo}!!!`
    setTimeout(()=>noticia.style.display='none',1000); 
})


let socket = io();

let theField = document.getElementById('playingfield');
let ctx = theField.getContext("2d");
//theField.addEventListener("touchstart", onTouchStart, false);
//theField.addEventListener("touchmove", onTouchMove, false);   
let bMouseDown = false;

function Coords(x,y,r,g,b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
}

let coords = new Coords(0,0,0,0,0);

window.addEventListener("load", ()=>{
    document.getElementById("blackCheck").checked = true;
    socket.emit('refresh', 'rectlist');
    document.getElementById("blackCheck").addEventListener("change",()=>{
        coords.r = 0;
        coords.g = 0;
        coords.b = 0;
    })
    document.getElementById("blueCheck").addEventListener("change",()=>{
        coords.r = 0;
        coords.g = 0;
        coords.b = 255;
    })
    document.getElementById("redCheck").addEventListener("change",()=>{
        coords.r = 255;
        coords.g = 0;
        coords.b = 0;
    })
    document.getElementById("greenCheck").addEventListener("change",()=>{
        coords.r = 0;
        coords.g = 255;
        coords.b = 0;
    })
});

socket.on('info', (data) => {
    document.getElementById("information").innerHTML = data;
});
 
socket.on('rect', (data) => {
    document.getElementById("information").innerHTML = `x: ${data.x} - y: ${data.y}`;
    ctx.fillStyle = `rgb(${data.r}, ${data.g}, ${data.b})`;
    ctx.fillRect(data.x - data.w / 2, data.y - data.h / 2, data.w, data.h);
});

socket.on('rectlistdata', (data) => {
    document.getElementById('information').innerHTML = "Data actualizada del servidor";
    ctx.clearRect(0, 0, 1280, 768);
    for (let k in data){
        let r = data[k];
        if (r != null) {
            ctx.fillStyle = `rgb(${r.r}, ${r.g}, ${r.b})`;
            ctx.fillRect(r.x - r.w / 2, r.y - r.h / 2, r.w, r.h);
        }
    }
});

socket.on('address', (data) => {
    document.getElementById('address').innerHTML = data;
})

function onMouseMove(e) {
    if (bMouseDown) {
        let box = theField.getBoundingClientRect();
        let X = e.clientX - box.left;
        let Y = e.clientY - box.top;
        coords.x = X;
        coords.y = Y;
        let R = coords.r;
        let G = coords.G;
        let B = coords.B;
        socket.emit('rect', coords);
        document.getElementById('information').innerHTML = `
            x: ${parseInt(X)} - y: ${parseInt(Y)} @
            R: ${parseInt(R)} - G: ${parseInt(G)} - B: ${parseInt(B)} 

        `;
    }  
} 

function onMouseUp(e){
    bMouseDown = false;
}

function onMouseLeave(e){
    bMouseDown = false;
}

function onMouseDown(e) {
    bMouseDown = true;
    let box = theField.getBoundingClientRect();
    let X = e.clientX - box.left;
    let Y = e.clientY - box.top;
    coords.x = X;
    coords.y = Y;
    let R = coords.r;
    let G = coords.G;
    let B = coords.B;
    socket.emit('rect', coords);
    document.getElementById('information').innerHTML = `
        x: ${parseInt(X)} - y: ${parseInt(Y)} @
        R: ${parseInt(R)} - G: ${parseInt(G)} - B: ${parseInt(B)} 

    `;
}  


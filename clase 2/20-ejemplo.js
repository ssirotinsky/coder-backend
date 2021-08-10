class Mensaje {
    constructor (mensaje, retardo){
        this.mensaje = mensaje;
        this.retardo = retardo ?? 1;
    }
     
    mostrar(){

        if (this.mensaje == undefined) {
            console.log('Defina mensaje');
        } else {
            try {
                let mostrarMensaje = this.mensaje.trimEnd();
                setTimeout(()=>console.log(mostrarMensaje), this.retardo * 1000);
            } catch {
                console.log('error');
            }
        }
    }
}

let saludar = new Mensaje('Hola a tod@s!', 2);
saludar.mostrar();
let saludar2 = new Mensaje('Hola a todas!');
saludar2.mostrar();
let saludar3 = new Mensaje('Hola a todos!', 0);
saludar3.mostrar();
let saludar4 = new Mensaje();
saludar4.mostrar();
let saludar5 = new Mensaje(0, 500);
saludar5.mostrar();

// let soyFalso = new Mensaje(false,1000);
// soyFalso.mostrar();
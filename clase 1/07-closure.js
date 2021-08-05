function creaFuncion() {
    var nombre = 'Juan';

    function saludar() {
        console.log('Hola', nombre);
    }
    saludar();
    // return saludar;
}

creaFuncion();
//console.log('Afuera: ', nombre);

//miFuncion = creaFuncion();
//miFuncion();
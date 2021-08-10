//Pasaje de parámetros por valor:
function probando(param) {
    param++;
    console.log('Adentro', param);
}

var miParam = 25
console.log('Antes', miParam);
probando(miParam);
console.log('Después', miParam);
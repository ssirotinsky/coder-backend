//Pasaje de parámetros por referencia:
function probando(param) {
    param[0]++;
    console.log('Adentro', param);
}

var miParam = [25]
console.log('Antes', miParam);
probando(miParam);
console.log('Después', miParam);
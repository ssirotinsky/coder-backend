function operarSobreArray(valores, tipoOperacion) {
    numeros = valores.filter(function(e) {
        if (typeof e == 'number') {
            return e;
        }
    })
    switch (tipoOperacion) {
        case "suma":
            return numeros[0] + numeros[1];
        case "resta":
            return numeros[0] - numeros[1];
        case "mult":
            return numeros[0] * numeros[1];
        case "div":
            return numeros[0] / numeros[1];
    }
}

valores = [true, 5, "false", false, "hola", "adios", 2];
console.log('La suma entre los valores numéricos es: ', operarSobreArray(valores, "suma"))
function textoConMasCaracteres(valores) {
    max = 0;
    devolver = '';
    for (i = 0; i < valores.length; i++) {
        if (typeof valores[i] == 'string') {
            if (valores[i].length > max) {
                max = valores[i].length;
                devolver = valores[i];
            }
        }
    }
    return devolver;
}

valores = [true, 5, false, "hola", "adios", 2];
console.log('El texto con más caracteres es: ', textoConMasCaracteres(valores));
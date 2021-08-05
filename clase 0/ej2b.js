function dondeEstaElFalse(valores) {
    posicion = -1;
    for (i = 0; i < valores.length; i++) {
        if (typeof valores[i] == 'boolean') {
            if (!valores[i]) {
                return i;
            }
        }
    }
    return -1;
}

valores = [true, 5, "false", false, "hola", "adios", 2];
console.log('El primer false se encuenta en: ', dondeEstaElFalse(valores));
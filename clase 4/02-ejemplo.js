function *numerosAleatorios(minimo, maximo) {
    let cantidad = 1;
    while (true) {
        let actual = new Date();
        mes = ('0' + (actual.getMonth() + 1)).slice(-2);
        yield {
            orden: cantidad++,
            numero: Math.floor((Math.random() * (maximo - minimo + 1 )) + minimo),
            fyh: actual.getDate() + '/' + 
                 mes + '/' + 
                 ('' + actual.getFullYear()).slice(-2) + ' ' + 
                 ('0' + actual.getHours()).slice(-2) + ':' + 
                 ('0' + actual.getMinutes()).slice(-2) + ':' + 
                 ('0' + actual.getSeconds()).slice(-2)
        }
    }
}

let generadora = numerosAleatorios(3,7);
console.log(generadora.next().value);
setInterval(
    ()=>console.log(generadora.next().value),
    1000
);
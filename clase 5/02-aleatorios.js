let numeros = {};

for (let i=0; i<20; i++){
    numeros[i+1] = 0;
}

for (let i=0; i<10000; i++){
    let azar = Math.floor(Math.random() * 20) + 1;
    numeros[azar]++;
}

console.log(numeros);
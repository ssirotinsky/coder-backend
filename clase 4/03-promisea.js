const miPromesa = new Promise ((resolve, reject)=>{
    console.log('a ver...');
    setTimeout(()=>resolve('Todo OK!!!'),
    2000)
});

console.log('iniciando...');
miPromesa
    .then(resultado => console.log(resultado));
console.log('finalizando...');
const miPromesa = new Promise ((resolve, reject)=>{
    let azar = Math.random();
    console.log('Azar: ', azar); 
    setTimeout(() => azar < 0.5 ? resolve(azar) : reject(azar),
    2000)
});

console.log('iniciando...');
miPromesa
    .then(resultado => console.log('Todo ok:', resultado))
    .catch(error => console.log('Error:', error));
console.log('finalizando...');
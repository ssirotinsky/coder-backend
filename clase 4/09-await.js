function resolverDespuesDe2Segundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Todo Ok!!!');
      }, 2000);
    });
}
  
async function asyncCall() {
    console.log('iniciando...');
    // await resolverDespuesDe2Segundos();
    // console.log(await resolverDespuesDe2Segundos());
    console.log('esperando...')
    const resultado = await resolverDespuesDe2Segundos();
    console.log('resultado:', resultado);
    console.log('finalizando...');
    return 25;
}
  
console.log('Inicio del PGM');
asyncCall().then(x=>console.log(x));

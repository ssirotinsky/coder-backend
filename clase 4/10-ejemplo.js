function resolverLuegoDe2Segundos(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
}

function resolverLuegoDe5Segundos(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
}
  
  
async function AgregarA(x) {
    const a = await resolverLuegoDe2Segundos(20);
    const b = await resolverLuegoDe2Segundos(30);
    return x + a + b;
}
  
AgregarA(10).then(v => {
    console.log('En AgregarA:', v);  
});
  
  
async function AgregarB(x) {
    const p_a = resolverLuegoDe2Segundos(50);
    const p_b = resolverLuegoDe5Segundos(20);
    return x + await p_a + await p_b;
}
  
AgregarB(100).then(v => {
    console.log('En AgregarB:', v);  
});
  
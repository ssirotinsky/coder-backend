const miTexto = 'Me gustan Java y Javascript';
const buscar = /Java/g;

console.log(miTexto.matchAll(buscar));
console.log([...miTexto.matchAll(buscar)]);
console.log([...miTexto.matchAll(buscar)].map(e => e.index));
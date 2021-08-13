// const precioFinal = (precio, cantidad) => precio * cantidad;
const precioFinal = (precio, cantidad) => precio * (cantidad ?? 1);

console.log(precioFinal(200,2));
console.log(precioFinal(200));
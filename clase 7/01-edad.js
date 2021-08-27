const moment = require('moment');

const hoy = moment();
const nacimiento = moment([1976,8,9]);
console.log(`Hoy es ${hoy.format('DD/MM/YYYY')}`);
console.log(`Naci el ${nacimiento.format('DD/MM/YYYY')}`);
console.log(`Desde mi nacimiento han pasado ${hoy.diff(nacimiento,"y")} años`);
console.log(`Desde mi nacimiento han pasado ${hoy.diff(nacimiento,"d")} días`);
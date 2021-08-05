function Perro(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
}

// Perro.prototype.ladrar = function() {
//     console.log('Guau!!!, soy ', this.nombre)
// }

let maxi = new Perro('Maxi', 'Caniche', 3);
console.log(maxi);
// maxi.ladrar();
class Perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    ladrar() {
        console.log('Guau!!!, soy ', this.nombre)
    }
}


let maxi = new Perro('Maxi', 'Caniche', 3);
console.log(maxi);
maxi.ladrar();
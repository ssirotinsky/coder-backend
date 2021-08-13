class Persona {

    #cliente

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.#cliente = true;
    }

    getCliente(){
	    return this.#cliente;
    }

    setCliente(cliente){
	    this.#cliente = cliente;
    }

}

let pedro = new Persona("pedro", 25);
console.log(pedro);
pedro.edad++;
// pedro.#cliente = false;
// console.log(pedro.#cliente);
console.log(pedro.getCliente());
pedro.setCliente(false);
console.log(pedro.getCliente());


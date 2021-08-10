let infoCliente = {
    nombre: "Pedro",
    edad: 25,
    telefono: {
        pais: 54,
        prefijo: 11,
        numero: 45287610 
    }
}

console.log(infoCliente.telefono.numero);

// let infoClienteNuevo = {
//     nombre: "Pedro",
//     edad: 25 
// }

// console.log(infoClienteNuevo.telefono.numero);
// console.log(infoClienteNuevo.telefono?.numero);

//Antes:
// console.log(infoClienteNuevo.telefono && infoClienteNuevo.telefono.numero);

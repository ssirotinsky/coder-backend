let operaciones = ['6**2', '**', '3**3', '4**', '4**5', '8**2**', '4*=5'];

let resultado = (e) => {
    let dividido = e.split('');
    if (dividido.includes('*', 1) && dividido.includes('*', 2)) {
        if (dividido.length == 4) {
            let numA = Number(dividido[0]);
            let numB = Number(dividido[3]);
            if (!isNaN(numA) && !isNaN(numB)) {
                return numA ** numB
            }
        }
    }
    return null;
}

console.log(operaciones.map(resultado));
async function funcionAsync(){
    return 'Valor Devuelto';
}

// console.log(funcionAsync());

funcionAsync()
    .then(resolve => console.log(resolve));
function *creaIds(){
    let indice = 0;
    while (indice<3) {
        yield indice++;
    }
    return indice;
}

let creadorIds = creaIds();

// console.log(creadorIds);
console.log(creadorIds.next().value);
console.log(creadorIds.next());
console.log(creadorIds.next());
console.log(creadorIds.next());



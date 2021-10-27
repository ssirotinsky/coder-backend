function suma(a, b) { 
    c = a + b; 
    return c; 
} 


const assert = require('assert').strict;
     
try {
    assert.equal(9, suma(3,6), "Prueba fallida");
    console.log('Prueba OK');
} catch(error) {
    console.log("Error: ", error)
}

